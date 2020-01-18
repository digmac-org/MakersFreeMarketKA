using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.WindowsAPICodePack.Dialogs;
using System.Web;
using System.Media;

namespace WindowsFormsAppCallOverpassApi
{
	public partial class Form1 : Form
	{
		public Form1()
		{
			InitializeComponent();
			SettingsOnStart();
		}
		/// <summary>
		/// This is a initial TEST! Is it possible to call the Overpass API? How is the query submitted and how to get the api results?!
		/// </summary>
		/// <param name="sender"></param>
		/// <param name="e"></param>
		private void button1_Click(object sender, EventArgs e)
		{
			textBox2.Text = "";
			using (var webClient = new System.Net.WebClient())
			{
				var json = webClient.DownloadString(textBox1.Text);
				textBox2.Text+= json;
				// Now parse with JSON.Net
			}
			
		//var json = new WebClient().DownloadString();


		/*
		HttpClient httpClient = new HttpClient();

		//specify to use TLS 1.2 as default connection
		System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;

		httpClient.BaseAddress = new Uri(textBox1.Text);
		httpClient.DefaultRequestHeaders.Accept.Clear();
		httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xml"));
		var request;
		var task = httpClient.PostAsXmlAsync<DeviceRequest>("api/SaveData", request);
		*/
	}

		private void button2_Click(object sender, EventArgs e)
		{
			//textBox4
			textBox5.Text = "";
			textBox6.Text = "";
			try
			{
				
				using (var webClient = new System.Net.WebClient())
				{
					var json = webClient.DownloadString(textBox3.Text + textBox4.Text);
					textBox5.Text += json;
					// Now parse with JSON.Net
					JObject o = JObject.Parse(json);
					Console.WriteLine(o.ToString());
					textBox6.Text = (o.ToString());
				}
			}
			catch (Exception)
			{
				textBox5.Text = "ERROR - Server returned wrong results (Dump)";
			}

		}

		private void button3_Click(object sender, EventArgs e)
		{
			System.Diagnostics.Process.Start("https://overpass-turbo.eu/");
		}

		/*
		/// <summary>
		/// Take the Arguments aka Paramstr0
		/// </summary>
		/// <param name="args"></param>
		public static void Main(string[] args)
		{
			if (args.Length == 0) 
			{
				
			}
			else
			{
				foreach (string s in args) {

				}
			}
		}
		*/

		private void SettingsOnStart()
		{
			textBoxBaseDir.Text = AppDomain.CurrentDomain.BaseDirectory;
		}

		private void button4_Click(object sender, EventArgs e)
		{
			SettingsOnStart();
		}

		private void button6_Click(object sender, EventArgs e)
		{
			System.Diagnostics.Process.Start("https://overpass-turbo.eu/?Q=" + textBox4.Text);
		}




		private object lastObjContextMenu;
		private void contextMenuStripCheckBoxFileSelect_Opening(object sender, CancelEventArgs e)
		{

			#region Examples from WWW
			//__________Is the Event called?! contextMenuStripCheckBoxFileSelect
			//MessageBox.Show("context Menu Strip - opening ... sender("+ sender.ToString()+")");

			//__________Name of the Controll the ContectMenu was clicked on...
			/*
			//get the context menu (it holds the caller)
			ContextMenuStrip contextMenu = sender as ContextMenuStrip;
			//get the callers name for testing 
			string controlName = contextMenu.SourceControl.Name;

			//test if it is infact me rich text editor making the call.
			if (controlName == "text_rchtxt")
			{
			}
			*/
			#endregion Examples from WWW

			//______________The following Items are available in the Menu and when the fu is allowed! (Enabled)
			//Add items - always allowed
			//Mark All - always allowed (if >0)
			//All *-1 - always allowed (if >0)
			//Keep only checked
			//Remove checked
			//LoadFromFile - always allowed
			//Save to File - always allowed (if >0)

			//Sender SourceControll is a CheckedListBox and has Items > 0
			if ((sender as ContextMenuStrip).SourceControl is CheckedListBox) {
				lastObjContextMenu = (sender as ContextMenuStrip).SourceControl;
				if (((sender as ContextMenuStrip).SourceControl as CheckedListBox).Items.Count > 0)
				{
					//If more than 0 items exist - all menu items are enabled! 
					//MessageBox.Show("CLB >0 context Menu Strip - opening ... sender(" + sender.ToString() + ") and controlName (" + controlName + ")");
					foreach (var item in (sender as ContextMenuStrip).Items)
					{
						if(item is ToolStripMenuItem) { 
							(item as ToolStripMenuItem).Enabled = true;
						}
					}
				}else{
					//If no items - Hide some menuItems
					//MessageBox.Show("NoCLB or... <=0 context Menu Strip - opening ... sender(" + sender.ToString() + ") and controlName (" + controlName + ")");
					foreach (var item in (sender as ContextMenuStrip).Items)
					{
						if (item is ToolStripMenuItem)
						{
							if (
								(item.ToString() == "Mark All")
								|| (item.ToString() == "All *-1")
								|| (item.ToString() == "Remove X-marked items")
								|| (item.ToString() == "Keep X-marked items")
								|| (item.ToString() == "Save to File")
								|| (item.ToString() == "Preview Selected File")
								)
								{
									(item as ToolStripMenuItem).Enabled = false;
								}
						}
					}
				}
			}
			else
			{
				MessageBox.Show("Error - this Function is not yet setup for non CheckListboxes 123dfgdfg4dfg56");
			}
		}

		private CommonOpenFileDialog ofd;
		private CommonOpenFileDialog GetOpenFileDialogForControl(string controlname,string menuItemName)
		{
			if (ofd == null) { ofd = new CommonOpenFileDialog(); }
			ofd.InitialDirectory = textBoxBaseDir.Text;
			ofd.Multiselect = true;

			if (menuItemName.Contains("folder"))
			{
				ofd.Title = "Select Folder(s)";
				ofd.IsFolderPicker = true;
			}
			else
			{
				ofd.Title = "Select File(s)";
				ofd.IsFolderPicker = false;
			}

			
			/*
			ofd.FileName = "Folder Selection";
			ofd.Filter = "";
			ofd.ValidateNames = false;
			ofd.CheckFileExists = false;
			ofd.CheckPathExists = false;
			*/
			return ofd;
		}

		public void CheckListBoxItemMod(object sender, EventArgs e,string modMode)
		{
			string caseoferrortext = "";
			if (lastObjContextMenu != null)
			{
				if (lastObjContextMenu is CheckedListBox)
				{
					if ((lastObjContextMenu as CheckedListBox).Items.Count > 0)
					{
						for (int i = (lastObjContextMenu as CheckedListBox).Items.Count - 1; i >= 0; i--)
						{

							switch (modMode)
							{
								case "markall":
									(lastObjContextMenu as CheckedListBox).SetItemChecked(i, true);
									break;
								case "togglecheckmark":
									(lastObjContextMenu as CheckedListBox).SetItemChecked(i, !(lastObjContextMenu as CheckedListBox).GetItemChecked(i));
									break;
								case "removemarked":
									if((lastObjContextMenu as CheckedListBox).GetItemChecked(i)) {
										(lastObjContextMenu as CheckedListBox).Items.RemoveAt(i);
									}
									break;
								case "removeunmarked":
									if (!(lastObjContextMenu as CheckedListBox).GetItemChecked(i))
									{
										(lastObjContextMenu as CheckedListBox).Items.RemoveAt(i);
									}
									break;
								default:
									caseoferrortext += "ERROR - Unknown modMode ("+modMode+")\n";
									break;
							}
						}
					}
					else
					{
						caseoferrortext += "Fail: No Items in the list - or to less items to perform this action!\n";
					}
				}
				else
				{
					caseoferrortext += "Error: Not a CheckedListBox\n";
				}
			}
			else
			{
				caseoferrortext += "Error: No Context Menu set\n";
			}
			if (caseoferrortext != "")
			{
				MessageBox.Show(caseoferrortext,
				"Error/Warnings for the last action",
				MessageBoxButtons.OK,
				MessageBoxIcon.Warning // for Warning  
									   //MessageBoxIcon.Error // for Error 
									   //MessageBoxIcon.Information  // for Information
									   //MessageBoxIcon.Question // for Question
				);
			}
		}

		private void markAllToolStripMenuItem_Click(object sender, EventArgs e)
		{
			CheckListBoxItemMod(sender, e,"markall");
		}

		private void all1ToolStripMenuItem_Click(object sender, EventArgs e)
		{
			CheckListBoxItemMod(sender, e, "togglecheckmark");
		}

		private void removeXMarkedtoolStripMenuItem_Click(object sender, EventArgs e)
		{
			CheckListBoxItemMod(sender, e, "removemarked");
		}

		private void keepXMarkedtoolStripMenuItem_Click(object sender, EventArgs e)
		{
			CheckListBoxItemMod(sender, e, "removeunmarked");
		}

		private void saveToFileToolStripMenuItem_Click(object sender, EventArgs e)
		{
			if (lastObjContextMenu != null)
			{
				if (lastObjContextMenu is CheckedListBox)
				{
					if ((lastObjContextMenu as CheckedListBox).Items.Count > 0)
					{
						SaveFileDialog saveFileDialog1 = new SaveFileDialog();
						saveFileDialog1.Filter = "txt files (*.txt)|*.txt|All files (*.*)|*.*";
						saveFileDialog1.FilterIndex = 2;
						saveFileDialog1.RestoreDirectory = true;

						if (saveFileDialog1.ShowDialog() == DialogResult.OK)
						{
							string saveAsText = "";
							for (int i = 0; i < (lastObjContextMenu as CheckedListBox).Items.Count; i++)
							{
								if ((lastObjContextMenu as CheckedListBox).GetItemChecked(i))
								{
									saveAsText += "1;" + ((lastObjContextMenu as CheckedListBox).Items[i] as MyFileStruct).fullFileName + Environment.NewLine;
								}
								else
								{
									saveAsText += "0;" + ((lastObjContextMenu as CheckedListBox).Items[i] as MyFileStruct).fullFileName + Environment.NewLine;
								}
							}
							File.WriteAllText(saveFileDialog1.FileName, saveAsText);
						}
					}
				}
			}
		}


		private void previewSelectedFileToolStripMenuItem_Click(object sender, EventArgs e)
		{
			
			if (lastObjContextMenu != null)
			{
				if (lastObjContextMenu is CheckedListBox)
				{
					if((lastObjContextMenu as CheckedListBox).SelectedIndex >= 0){
						string selectedFile = ((lastObjContextMenu as CheckedListBox).Items[(lastObjContextMenu as CheckedListBox).SelectedIndex] as MyFileStruct).fullFileName;
						
						if (File.Exists(selectedFile)){
							MyDateContainer newContainer = new MyDateContainer(selectedFile);
							textBox7.Clear();
							textBox8.Clear();
							int counter = 0;
							string line;
							System.IO.StreamReader file = new System.IO.StreamReader(selectedFile);
							while ((line = file.ReadLine()) != null)
							{
								System.Console.WriteLine(line);
								counter++;
								textBox7.Text += line+Environment.NewLine;  //Just write the Line!
								textBox8.Text += newContainer.AddNewStreet(line).overpassQuery.ToString()+""+Environment.NewLine ;
								//textBox8.Text += ConvertAdrRawToUsable(line);
							}
						}
						else
						{
							MessageBox.Show("The file selected was not found!\n ("+ selectedFile+")");
						}
					}else
					{
						(lastObjContextMenu as CheckedListBox).SelectedIndex = 0;
						MessageBox.Show("Please select (highlight) a clb itemline before you call this function!\nFor reference - the first item is now selected!");
					}
				}
			}
		}

	

		private string ConvertAdrRawToUsable(string line)
		{

			//USE THE CLASS NOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

			//Step1 - Filter and Identify all Streets with HousNumber!

			//Street only
			//Street +houseNo
			//Street +houseNoFrom-houseNoTo
			
			bool isRelevant = false;

			string streetName = "";
			bool hasHouseNo = false;
			string houseNo1 = "";
			string houseNo2 = "";

			//Replace the last Character of each line (";")
			string teilst = line.Substring(line.Length - 2);
			if (line.Substring(line.Length - 2) == "; ")
			{
				//Cleaned string to search address from
				line = line.Substring(0, line.Length - 2);

				if(
					line.Any(x => Char.IsDigit(x))
					){
					//hasHouseNo = true;
						int lastInd = line.LastIndexOf(" ") + 1;
						int endos = line.Length - lastInd;
						string houseNoPart = line.Substring(lastInd, endos);
					if (houseNoPart.Contains("-"))
					{
						int lastInd2 = houseNoPart.LastIndexOf("-");
						houseNo1 = houseNoPart.Substring(0, lastInd2);
						houseNo2 = houseNoPart.Substring(lastInd2,houseNoPart.Length - lastInd2);
						hasHouseNo = true;
					}
					else
					{ //Street with one HouseNumber houseNo1
						streetName = line;
						hasHouseNo = true;
						houseNo1 = houseNoPart;
						houseNo2 = "";
					}
				}
				else
				{//No Digits - street only!
					streetName = line;
				}

				/*
				if (line.Contains("-ende"))
				{
					hasHouseNo = true;
				}
				else
				{
					if(line.Any(x => Char.IsWhiteSpace(x)))
					{
						// Blank / Whitespace found... 
						
						if (line.Contains(" strasse"))
						{


							//DAS führt zu Fehlern - wenn " strasse 9" z.B. string tmp = line.Replace(" strasse", "");
							int lastInd = line.LastIndexOf(" strasse")+8;
							int endos = line.Length - lastInd;
							string tmp = line.Substring(lastInd,endos);
							if (tmp.Any(x => Char.IsWhiteSpace(x)))
							{
								isRelevant = true;
							}
							else
							{
								isRelevant = false;
							}
						}
					  
					}
					else
					{
						hasHouseNo = false;
					}
				}*/
			}
			else
			{
				//Wrong Format?!
				MessageBox.Show("Error - Wrong Format !!! ; Blank not found !!!!\n (" + line + ")");
			}
			if (hasHouseNo)
			{
				return houseNo1 +"---"+houseNo2+Environment.NewLine;
			}
			else
			{
				return Environment.NewLine;
			}
		}

		private void loadFromFileToolStripMenuItem_Click(object sender, EventArgs e)
		{
			if (lastObjContextMenu != null)
			{
				if (lastObjContextMenu is CheckedListBox)
				{
					CommonOpenFileDialog ofd = GetOpenFileDialogForControl((lastObjContextMenu as CheckedListBox).Name, (sender as ToolStripMenuItem).Text);
					if (ofd.ShowDialog() == CommonFileDialogResult.Ok)
					{
						if ((lastObjContextMenu as CheckedListBox).Items.Count > 0)
						{
							DialogResult dialogResult = MessageBox.Show("Press YES if you want to keep the existing Items! (Recommended = NO)", "Existing Items", MessageBoxButtons.YesNo);
							if (dialogResult == DialogResult.Yes)
							{ }
							else if (dialogResult == DialogResult.No)
							{
								//do something else
								(lastObjContextMenu as CheckedListBox).Items.Clear();
							}
						}
						int counter = 0;
						string line;
						System.IO.StreamReader file = new System.IO.StreamReader(ofd.FileName);
						while ((line = file.ReadLine()) != null)
						{
							//System.Console.WriteLine(line);
							counter++;

							if (line.Substring(0, 2) == "0;")
							{
								(lastObjContextMenu as CheckedListBox).Items.Add(new MyFileStruct(line.Substring(2, line.Length-2)), false);
							}
							else
							{
								if (line.Substring(0, 2) == "1;") {
									(lastObjContextMenu as CheckedListBox).Items.Add(new MyFileStruct(line.Substring(2, line.Length - 2)), true);
								}
								else
								{
									(lastObjContextMenu as CheckedListBox).Items.Add(new MyFileStruct(line), false);
								}
							}
						}
						file.Close();
						System.Console.WriteLine("There were {0} lines.", counter);
					}
				}
			}
		}

		private void addItemsToolStripMenuItem_Click(object sender, EventArgs e)
		{
			if ((lastObjContextMenu!=null) && (lastObjContextMenu is CheckedListBox))
			{
				if ((lastObjContextMenu as CheckedListBox).Items.Count > 0)
				{
					DialogResult dialogResult = MessageBox.Show("Press YES if you want to keep the existing Items!", "Existing Items", MessageBoxButtons.YesNo);
					if (dialogResult == DialogResult.Yes)
					{
						//do something
					}
					else if (dialogResult == DialogResult.No)
					{
						//do something else
						(lastObjContextMenu as CheckedListBox).Items.Clear();
					}
				}

				CommonOpenFileDialog ofd = GetOpenFileDialogForControl((lastObjContextMenu as CheckedListBox).Name, (sender as ToolStripMenuItem).Text);
				if (ofd.ShowDialog() == CommonFileDialogResult.Ok) {
					//String[] selectedStrings = new String[123];
					List<String> newDirOrFileStringList = new List<string>();
					foreach (var item in ofd.FileNames)
					{
						newDirOrFileStringList.Add(item);
					}
					RecScanToCheckedListBox(newDirOrFileStringList, (lastObjContextMenu as CheckedListBox));
				}
			}
			else
			{
				MessageBox.Show("Error - this Function is not yet setup for non CheckListboxes 12dsjkkfg4dfg56");
			}
		}

		private void RecScanToCheckedListBox(List<String> allStrings, CheckedListBox targetClb, bool scanDir=false)
		{
				foreach (string itemfndir in allStrings)
				{
					FileAttributes attr = File.GetAttributes(itemfndir);
					if (attr.HasFlag(FileAttributes.Directory))
					{
						//MessageBox.Show("Its a directory");
						List<String> newDirStringList = new List<string>();
						foreach (string dgfs in Directory.GetFiles(itemfndir))
						{
							newDirStringList.Add(dgfs);
						}
						RecScanToCheckedListBox(newDirStringList, targetClb, false);
					}
					else
					{
						//MessageBox.Show("Its a file");
						MyFileStruct mfs = new MyFileStruct(itemfndir);
						(lastObjContextMenu as CheckedListBox).Items.Add(mfs, true);
					}
				}
		}

		private class MyFileStruct
		{
			public string text;
			public string fullFileName;

			public MyFileStruct(string _fullFileName)
			{
				fullFileName = _fullFileName;
				text = System.IO.Path.GetFileNameWithoutExtension(fullFileName);
			}
			public override string ToString()
			{
				return text;
			}
		}

		private void button5_Click(object sender, EventArgs e)
		{
			for (int i = 0; i < checkedListBox1.Items.Count; i++)
			{
				checkedListBox1.SelectedIndex = i;
				previewSelectedFileToolStripMenuItem_Click(checkedListBox1, null);
			}
		}

		private void checkedListBox2_MouseClick(object sender, MouseEventArgs e)
		{
			//Hier liste laden!!!
			if (checkBoxSaved.Checked)
			{
				previewSelectedFileToolStripMenuItem_Click2(checkedListBox2, null);
			}
		}
		private void previewSelectedFileToolStripMenuItem_Click2(object sender, EventArgs e)
		{

			if (lastObjContextMenu != null)
			{
				if (lastObjContextMenu is CheckedListBox)
				{
					if ((lastObjContextMenu as CheckedListBox).SelectedIndex >= 0)
					{
						string selectedFile = ((lastObjContextMenu as CheckedListBox).Items[(lastObjContextMenu as CheckedListBox).SelectedIndex] as MyFileStruct).fullFileName;
						textBox10.Text = ((lastObjContextMenu as CheckedListBox).Items[(lastObjContextMenu as CheckedListBox).SelectedIndex] as MyFileStruct).ToString()+".js";
						string saveToFile = textBox9.Text + textBox10.Text; //---> See bottom!

						if (File.Exists(selectedFile))
						{
							MyDateContainer newContainer = new MyDateContainer(selectedFile);
							textBox7.Clear();
							textBox8.Clear();
							int counter = 0;
							string line;
							System.IO.StreamReader file = new System.IO.StreamReader(selectedFile);
							textBox11.Clear();
							/*
							textBox11.Text = @"{{geocodeArea:Karlsruhe}}->.searchArea;
(
";
*/
							textBox13.Clear();
							textBox13.Text = "var streetparts = [";
							string laststr = "";
							while ((line = file.ReadLine()) != null)
							{
								if (laststr != "")
								{
									textBox13.Text += ","+Environment.NewLine;
								}
								System.Console.WriteLine(line);
								counter++;
								textBox7.Text += line + Environment.NewLine;  //Just write the Line!
								//textBox11.Text += 
									newContainer.AddNewStreet(line).overpassQuery.ToString();
								textBox13.Text += '"' + line.Substring(0, line.Length - 2) + '"';
								laststr = ",";
								//textBox8.Text += ConvertAdrRawToUsable(line);
							}
							textBox13.Text+= "]; "+ Environment.NewLine + Environment.NewLine + " var streetpartsgeojson = ";
							/*textBox11.Text+= @");
(
  ._;
  >;
);
out; ";*/
							textBox11.Text = newContainer.GetOverPassTurboQuery(true);

							if (File.Exists(saveToFile))
							{
								tabControl4.SelectTab(2);
							}
							else
							{
								tabControl4.SelectTab(0);
							}

						}
						else
						{
							MessageBox.Show("The file selected was not found!\n (" + selectedFile + ")");
						}
					}
					else
					{
						(lastObjContextMenu as CheckedListBox).SelectedIndex = 0;
						MessageBox.Show("Please select (highlight) a clb itemline before you call this function!\nFor reference - the first item is now selected!");
					}
				}
			}
		}

		private void button8_Click(object sender, EventArgs e)
		{
			System.Windows.Forms.Clipboard.SetText(textBox11.Text);
			string urad = HttpUtility.UrlEncode(textBox11.Text);
			if (urad.Length < 200){ 
				System.Diagnostics.Process.Start("https://overpass-turbo.eu/?Q=" + urad);
			}
			else
			{
				System.Diagnostics.Process.Start("https://overpass-turbo.eu/?Q=Insert%20Code%20with%20Use%20Crtl%20V%20"+ urad.Substring(0,150));
			}
			tabControl4.SelectTab(1);
			textBox15.Text = "Button2Overpass was clicked -> Next: Insert and run in OPT and then...After DL - Click Button to read dl file... ";
			SystemSounds.Beep.Play();
		}

		private void button7_Click(object sender, EventArgs e)
		{
			if (textBox12.Text.Length > 3)
			{
				textBox13.Text += textBox12.Text;
				System.Windows.Forms.Clipboard.SetText("Cleaned after Paste of OverPassTurboText 2 Form");
				tabControl4.SelectTab(2);
			}
			else
			{
				textBox12.Text =System.Windows.Forms.Clipboard.GetText();
			}
		}

		private void button9_Click(object sender, EventArgs e)
		{
			string saveToFile = textBox9.Text + textBox10.Text;
			File.WriteAllText(saveToFile, textBox13.Text);
			checkBoxSaved.Checked = false;
			checkedListBox2.SetItemChecked(checkedListBox2.SelectedIndex,false);
			if(checkedListBox2.SelectedIndex< checkedListBox2.Items.Count - 1) { 
				checkedListBox2.SelectedIndex=checkedListBox2.SelectedIndex+1;
			}
			tabControl4.SelectTab(0);

			
			if (File.Exists(textBox14.Text))
			{
				try
				{
					string nfn = @"C:\Users\dirk\Downloads\export_" + textBox10.Text.Replace(".js", "") + ".geojson";
					System.IO.File.Move(textBox14.Text, nfn);
				}
				catch (Exception)
				{
					SystemSounds.Beep.Play();
					SystemSounds.Beep.Play();
					SystemSounds.Beep.Play();
				}
				
			}

			textBox11.Text = "SAVED - OLD: " + textBox11.Text;
			textBox12.Text = "SAVED - OLD: " + textBox12.Text;
			textBox13.Text = "SAVED - OLD: " + textBox13.Text;

			textBox15.Text = "File was saved - Check Saved and load next File!!! ";
			SystemSounds.Beep.Play();
		}

		private void button10_Click(object sender, EventArgs e)
		{
			SystemSounds.Beep.Play();
			if (File.Exists(textBox14.Text))
			{
				/*-----*/
				//string line;
				//	System.IO.StreamReader file = new System.IO.StreamReader(textBox14.Text);
				textBox12.Visible = false;
				textBox13.Visible = false;
				textBox12.Clear();

				/*
					while ((line = file.ReadLine()) != null)
					{
						//System.Console.WriteLine(line);
						textBox12.Text += line;
					}
					*/
				textBox12.Text = File.ReadAllText(textBox14.Text);
				

				textBox13.Text += textBox12.Text;
				textBox12.Visible = true;
				textBox13.Visible = true;
				//System.Windows.Forms.Clipboard.SetText("Cleaned after Paste of OverPassTurboText 2 Form");
				tabControl4.SelectTab(2);
				SystemSounds.Beep.Play();
				textBox15.Text = "File was read and now the full Source should be saved!!! (Hit Save Button)";
				//file.Close(); 
				/*-----*/
			}
		}

		private void button11_Click(object sender, EventArgs e)
		{
			SystemSounds.Beep.Play();
			if (checkedListBox2.Items.Count < 2)
			{
				lastObjContextMenu = checkedListBox2; //Needed if no Popup was selected 
				string loadThis = @"C:\2020Pro\MakersFreeMarketKA\OverpassApiCallsWinExe\DatumsFiles2020_txt4clb.txt";
				string line;
				System.IO.StreamReader file = new System.IO.StreamReader(loadThis);
				while ((line = file.ReadLine()) != null)
				{
					//System.Console.WriteLine(line);

					if (line.Substring(0, 2) == "0;")
					{
						checkedListBox2.Items.Add(new MyFileStruct(line.Substring(2, line.Length - 2)), false);
					}
					else
					{
						if (line.Substring(0, 2) == "1;")
						{
							checkedListBox2.Items.Add(new MyFileStruct(line.Substring(2, line.Length - 2)), true);
						}
						else
						{
							checkedListBox2.Items.Add(new MyFileStruct(line), false);
						}
					}
				}
				file.Close();
			}
			else
			{
				for (int i = 0; i < checkedListBox2.Items.Count; i++)
				{
					if (File.Exists(textBox9.Text + "" + (checkedListBox2.Items[i] as MyFileStruct).ToString() + ".js"))
					{
						checkedListBox2.SetItemChecked(i, false);
					}
					else
					{
						checkedListBox2.SetItemChecked(i, true);
					}
				}
				/*
				foreach (var item in checkedListBox2.Items)
				{
					if (File.Exists(textBox9.Text+""+(item as MyFileStruct).ToString()+".js")) {
						(item as CheckListBoxItem).GetItemChecked = false;
						//((lastObjContextMenu as CheckedListBox).Items[(lastObjContextMenu as CheckedListBox).SelectedIndex] as MyFileStruct).ToString() + ".js";
					}
				}
				*/
			}
		}

		private void button12_Click(object sender, EventArgs e)
		{
			string dummyStr = @"
{
							#type#: #Feature#,
							#properties#: {
									#popupContent#: #Please see the Popup#,
									#underConstruction#: true
							},
							#geometry#: {
									#type#: #Point#,
									#coordinates#: [8.405263,49.013669]
							}
}
			";
			dummyStr = dummyStr.Replace("#", "\"");

			for (int i = 0; i < checkedListBox2.Items.Count; i++)
			{
				if (checkedListBox2.GetItemChecked(i))
				{
					checkedListBox2.SelectedIndex = i;
					previewSelectedFileToolStripMenuItem_Click2(checkedListBox2, null);
					textBox12.Text = dummyStr;
					button7_Click(null, null);
					button9_Click(null, null);
				}
			}
				/*
				string dummddd = @""+
				+@"{" +
					+@"\"type\": \"Feature\","
								+ @"\"properties\": {"
						+ @"\"popupContent\": \"Please see the Popup\","
										+ @"\"underConstruction\": true"
								+ @"},"
								+@"\"geometry\": {"
						+ @"\"type\": \"Point\","
										+ @"\"coordinates\": [8.405263,49.013669]"
		+ @"}"
	+@"}";*/
			}
	}
}
