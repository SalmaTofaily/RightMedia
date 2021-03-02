
using Encoder.Settings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Encoder.Gateway.Settings
{
    public class InputLocation : ILocation
    {
        public string Directory { get; set; }
        public string RelativePath { get; set; }
    }
}
