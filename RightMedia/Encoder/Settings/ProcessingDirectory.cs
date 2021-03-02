using System;
using System.Collections.Generic;
using System.Text;

namespace Encoder.Settings
{
    public class ProcessingDirectory : ILocation
    {
        public string Directory { get; set; }
        public string RelativePath { get; set; }
    }
}
