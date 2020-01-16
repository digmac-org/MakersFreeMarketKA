using System;
using System.Collections.Generic;
using System.Linq;

namespace WindowsFormsAppCallOverpassApi
{
	public class MyDateContainer
	{
		public string fullFileName;
		public List<MyStreetStruct> streetStruct;
		public enum STREETSTYLE
		{
			notfilled, street,street1no,street2no,street1notillend,failed
		}

		public MyDateContainer(string _fullFileName)
		{
			fullFileName = _fullFileName;
			streetStruct = new List<MyStreetStruct>();
		}
		public MyStreetStruct AddNewStreet(string rawStreetString)
		{
			if (rawStreetString.Length > 0)
			{
				MyStreetStruct tss = new MyStreetStruct(rawStreetString);
				streetStruct.Add(tss);
				/*
				switch (tss.sstyle)
				{
					case STREETSTYLE.notfilled:
						break;
					case STREETSTYLE.street:
						break;
					case STREETSTYLE.street1no:
						break;
					case STREETSTYLE.street2no:
						break;
					case STREETSTYLE.street1notillend:
						break;
					case STREETSTYLE.failed:
						break;
					default:
						break;
				}*/
				return tss;
			}
			return null;
		}

		public class MyStreetStruct
		{
			public string rawStreetString;
			public string rawStreetStringCleaned;
			public string streetName;
			public string houseNo1;
			public string houseNo2;

			public string overpassQuery ="";
			public int isStreetFormat = -1;
			public STREETSTYLE sstyle = STREETSTYLE.notfilled;
			public MyStreetStruct(string _rawStreetString)
			{
				rawStreetString = _rawStreetString;
				isStreetFormat = 0;
				ExtractStreetFromRaw();
			}
			/*
			 * [out:json]; - in den API Call einfügen - für JSON output... 
			 * ACHTUNG - OVERPASS turbo <> Overpass QL !!! - Kann aber umgewandelt werden - siehe Overpass Turbo &target=mapql
			 * https://overpass-api.de/api/convert?data=%2F*%0AThis%20is%20an%20example%20Overpass%20query.%0ATry%20it%20out%20by%20pressing%20the%20Run%20button%20above!%0AYou%20can%20find%20more%20examples%20with%20the%20Load%20tool.%0A*%2F%0A%0Aarea(3600062518)-%3E.searchArea%3B%0A(%0A%20%20way%0A%20%20%20%20%5Bname%3D%22Vorholzstra%C3%9Fe%22%5D%0A%20%20%09(area.searchArea)%3B%0A)%3B%0A%2F*added%20by%20auto%20repair*%2F%0A(._%3B%3E%3B)%3B%0A%2F*end%20of%20auto%20repair*%2F%0Aout%3B&target=mapql
			 */
			/*GEHT 100 % in OP Turbo - Über EXPORT - in OverpassQL und es sollte gehen!
{{geocodeArea:Karlsruhe}}->.searchArea;
(
  way
    ["addr:housenumber"](if:t["addr:housenumber"] >= 1 && t["addr:housenumber"] < 20)
    ["addr:street"="Vorholzstraße"]
  	(area.searchArea);
  way
    [name="Vorholzstraße"]
  	(area.searchArea);
);
/ *added by auto repair* /
			(._;>;);
/ *end of auto repair* /
out;
			 */
			public string SonderzWorkaround(string str,string toReplace)
			{
				if (toReplace == "all")
				{
					return SonderzWorkaround(SonderzWorkaround(SonderzWorkaround(str,"ae"),"oe"),"ue");
				}
				else
				{
					string tmp1 = str;
					string tmp2 = str;
					if (str.Contains(toReplace))
					{
						tmp1 = str.Replace(toReplace, "..");
						tmp2 = str.Replace(toReplace, ".");
						return str + "|" + tmp1 + "|" + tmp2;
					}
					return str;
				}
			}
			public string OPTQueryStreet(string street, bool replacePipedSpecChars=false)
			{
				string tmp="";
				if (!replacePipedSpecChars) { 
				tmp = "way " 
					+ Environment.NewLine 
					+"[\"name\" ~ \"" + street + "\"]" 
					+ Environment.NewLine 
					+"(area.searchArea);";
				}
				else
				{
					tmp = "way "
						+ Environment.NewLine
						+ "[\"name\" ~ \"" + SonderzWorkaround(street,"all") + "\"]"
						+ Environment.NewLine
						+ "(area.searchArea);";
				}
				return tmp;
			}
			public string QueryStreet()
			{
				return "way "+Environment.NewLine+
					"[\"name\" ~ \"" + streetName + "\"]" + Environment.NewLine +
					"(area.searchArea);";
			}
			public string QueryHouse1()
			{
				return "way " + Environment.NewLine +
						"[\"addr: housenumber\"](if:t[\"addr: housenumber\"] == \"" + houseNo1 + "\" )" + Environment.NewLine +
						"[\"addr: street\" ~ \"" + streetName + "\"]" + Environment.NewLine +
					"(area.searchArea);";
			}
			public string QueryHouse2()
			{
				return "way " + Environment.NewLine +
						"[\"addr:housenumber\"](if:t[\"addr:housenumber\"] >= \"" + houseNo1 + "\" && t[\"addr:housenumber\"] <= \""+houseNo2+"\" )"+
						"[\"addr:street\" ~ \"" + streetName + "\"]"+ Environment.NewLine +
						"(area.searchArea);";
			}
			public string PrepareOverpassQuery()
			{
				switch (sstyle)
				{
					case STREETSTYLE.street:
						overpassQuery = QueryStreet();
						break;
					case STREETSTYLE.street1no:
						overpassQuery = QueryHouse1();
						break;
					case STREETSTYLE.street2no:
						overpassQuery = QueryHouse2();
						break;
					case STREETSTYLE.street1notillend:
						overpassQuery = QueryHouse2();
						break;
					case STREETSTYLE.notfilled:
					case STREETSTYLE.failed:
					default:
						overpassQuery = "ERROR";
						break;
				}
				return overpassQuery;
			}

			public string TrimStringToNotHaveLastChars(string strToClean,char lastChar=' ')
			{
				if (strToClean[strToClean.Length-1] == lastChar) {
					return TrimStringToNotHaveLastChars(strToClean.Substring(0, strToClean.Length - 1), lastChar);
				}
				else
				{
					return strToClean;
				}
			}
			public string FormatWordStreets(string strToClean,char wordSep=' ')
			{
				string[] streetTemp = strToClean.Split(wordSep);
				string newStreetName = "";
				bool isFirst = true;
				foreach (string s in streetTemp)
				{
					if (s.Length > 0)
					{
						if (isFirst)
						{
							isFirst = false;
						}
						else
						{
							newStreetName += wordSep;
						}
						newStreetName += "[" + (s.Substring(0, 1)).ToLower() + "" + (s.Substring(0, 1)).ToUpper() + "]" + s.Substring(1, s.Length - 1);
					}
				}
				return newStreetName;
			}
			public string CheckExtractedStreet(string streetToFormat)
			{
				string newStreetName = TrimStringToNotHaveLastChars(streetToFormat.Replace(" strasse", "XXstreetXX"),' ');
				if (newStreetName.Contains(" ")) {
					newStreetName = FormatWordStreets(newStreetName,' ');
				}
				else
				{
					if (newStreetName.Contains("-"))
					{
						newStreetName = FormatWordStreets(newStreetName, '-');
					}
					else { 
						newStreetName = newStreetName.Substring(0, 1).ToUpper() + newStreetName.Substring(1, newStreetName.Length - 1);
					}
				}
				newStreetName = ReplaceOtherSpecialCharacters(newStreetName);
				return newStreetName.Replace("XXstreetXX", " Straße");
			}
			public string ReplaceOtherSpecialCharacters(string newStreetName)
			{
				return newStreetName.Replace("trasse", "traße");
				/*** Das muss in der Query gemacht werden - da dann aus... 
				 ["name" ~ "[aA]n [dD]er [sS]tadtma.r"] 
				 ["name" ~ "[aA]n [dD]er [sS]tadtma.r|[aA]n [dD]er [sS]tadtma..r"] gemacht werden muss (PIPE ||)

					.Replace("ae", ".")
					.Replace("oe", ".")
					.Replace("ue", ".")
					.Replace("Ae", ".")
					.Replace("Oe", ".")
					.Replace("Ue", ".");
				/*
					.Replace("oe", ".")
					.Replace("oe", ".")
					*/
			}

			public void ExtractStreetFromRaw()
			{
				//rawStreetString

				//Replace the last Character of each line (";")
				string teilst = rawStreetString.Substring(rawStreetString.Length - 2);
				if (rawStreetString.Substring(rawStreetString.Length - 2) == "; ")
				{
					//Cleaned string to search address from
					string line = rawStreetString.Substring(0, rawStreetString.Length - 2);
					rawStreetStringCleaned = line;
					if (
						line.Any(x => System.Char.IsDigit(x))
						)
					{
						//hasHouseNo = true;
						int lastInd = line.LastIndexOf(" ") + 1;
						int endos = line.Length - lastInd;
						string houseNoPart = line.Substring(lastInd, endos);

						streetName = CheckExtractedStreet(line.Substring(0,lastInd));

						if (houseNoPart.Contains("-"))
						{
							int lastInd2 = houseNoPart.LastIndexOf("-");
							houseNo1 = houseNoPart.Substring(0, lastInd2);
							houseNo2 = houseNoPart.Substring(lastInd2+1, houseNoPart.Length - lastInd2 -1);
							if (line.Contains("-ende"))
							{
								sstyle = STREETSTYLE.street1notillend;
							}
							else
							{
								sstyle = STREETSTYLE.street2no;
							}
						}
						else
						{ //Street with one HouseNumber houseNo1
							//streetName = line;
							houseNo1 = houseNoPart;
							houseNo2 = "";
							sstyle = STREETSTYLE.street1no;
						}
					}
					else
					{//No Digits - street only!
						streetName = CheckExtractedStreet(line); 
						sstyle = STREETSTYLE.street;
					}
				}
				else
				{
					//Wrong Format?!
					//MessageBox.Show("Error - Wrong Format !!! ; Blank not found !!!!\n (" + line + ")");
					sstyle = STREETSTYLE.failed;
				}
				PrepareOverpassQuery();
			}
		}

		internal string GetOverPassTurboQuery(bool streetOnly=true)
		{
			string resStr =  @"{{geocodeArea:Karlsruhe}}->.searchArea;
(
";
			resStr+= Environment.NewLine;

			List<string> allStreets = new List<string>();
			foreach (MyStreetStruct itm in streetStruct)
			{
				if (!allStreets.Contains(itm.streetName))
				{
					allStreets.Add(itm.streetName);
				}
			}
			foreach (string str in allStreets)
			{
				//textBox11.Text += 
				//newContainer.AddNewStreet(line).overpassQuery.ToString() + "" + Environment.NewLine;
				resStr += streetStruct[0].OPTQueryStreet(str, true);
			}
			resStr += @");
(
  ._;
  >;
);
out; ";
			return resStr;
		}
	}
}