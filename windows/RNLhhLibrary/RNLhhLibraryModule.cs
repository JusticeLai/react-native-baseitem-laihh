using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Lhh.Library.RNLhhLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNLhhLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNLhhLibraryModule"/>.
        /// </summary>
        internal RNLhhLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNLhhLibrary";
            }
        }
    }
}
