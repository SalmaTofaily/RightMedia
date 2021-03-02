using System;
using System.Collections.Generic;
using System.Text;

namespace Encoder.Settings
{
    public interface ILocation
    {
        //Direct connected Folder devided into two parts to keep some flexibility in management
        public string Directory { get; set; }
        public string RelativePath { get; set; }
    }
}
