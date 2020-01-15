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
			public string QueryStreet()
			{
				return "way "+
					"[name = " + streetName + "]" +
						
						"[addr: street = " + streetName + "](area.searchArea);";
			}
			public string QueryHouse1()
			{
				return "way " +
						"[addr: housenumber](if:t[addr: housenumber] = " + houseNo1 + ")" +
						"[addr: street = " + streetName + "](area.searchArea);";
			}
			public string QueryHouse2()
			{
				return "way " +
						"[addr: housenumber](if:t[addr: housenumber] = " + houseNo1 + "&& t[addr: housenumber] < "+houseNo2+")"+
						"[addr: street = " + streetName + "](area.searchArea);";
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
			public void ExtractStreetFromRaw()
			{
				//rawStreetString

				//Replace the last Character of each line (";")
				string teilst = rawStreetString.Substring(rawStreetString.Length - 2);
				if (rawStreetString.Substring(rawStreetString.Length - 2) == "; ")
				{
					//Cleaned string to search address from
					string line = rawStreetString.Substring(0, rawStreetString.Length - 2);

					if (
						line.Any(x => System.Char.IsDigit(x))
						)
					{
						//hasHouseNo = true;
						int lastInd = line.LastIndexOf(" ") + 1;
						int endos = line.Length - lastInd;
						string houseNoPart = line.Substring(lastInd, endos);
						if (houseNoPart.Contains("-"))
						{
							int lastInd2 = houseNoPart.LastIndexOf("-");
							houseNo1 = houseNoPart.Substring(0, lastInd2);
							houseNo2 = houseNoPart.Substring(lastInd2, houseNoPart.Length - lastInd2);
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
							streetName = line;
							houseNo1 = houseNoPart;
							houseNo2 = "";
							sstyle = STREETSTYLE.street1no;
						}
					}
					else
					{//No Digits - street only!
						streetName = line;
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
	}
}