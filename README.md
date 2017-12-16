
# react-native-lhh-library

## Getting started

`$ npm install react-native-lhh-library --save`

### Mostly automatic installation

`$ react-native link react-native-lhh-library`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-lhh-library` and add `RNLhhLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNLhhLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNLhhLibraryPackage;` to the imports at the top of the file
  - Add `new RNLhhLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-lhh-library'
  	project(':react-native-lhh-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-lhh-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-lhh-library')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNLhhLibrary.sln` in `node_modules/react-native-lhh-library/windows/RNLhhLibrary.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Lhh.Library.RNLhhLibrary;` to the usings at the top of the file
  - Add `new RNLhhLibraryPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNLhhLibrary from 'react-native-lhh-library';

// TODO: What to do with the module?
RNLhhLibrary;
```
  