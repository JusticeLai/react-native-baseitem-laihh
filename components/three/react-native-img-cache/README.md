# React Native Image Cache

[![CircleCI](https://circleci.com/gh/wcandillon/react-native-img-cache.svg?style=svg)](https://circleci.com/gh/wcandillon/react-native-img-cache)
[![npm version](https://badge.fury.io/js/react-native-img-cache.svg)](https://badge.fury.io/js/react-native-img-cache)

CachedImage component and Cache image manager for React Native.

## Deprecated

**I am no longer maintaining this library but [react-native-expo-image-cache](https://github.com/wcandillon/react-native-expo-image-cache) which depends on ExpoKit.**

**Checkout [5 things to know about Images in React Native](https://medium.com/@wcandillon/5-things-to-know-about-images-react-native-69be41d2a9ee)**

## Why do I need this?
Starting version `0.43`, the React Native [Image component](https://facebook.github.io/react-native/docs/image.html) has now a cache property: `cache: force-cache` (iOS only). This is a major improvement but only for iOS and at this time, I wasn't able to use it in a way that provides a user experience as smooth as this module.

## Installation

### rn-fetch-blob
This package has a dependency with [rn-fetch-blob](https://github.com/joltup/rn-fetch-blob).
If your project doesn't have a dependency with this package already, please refer to [their installation instructions](https://github.com/joltup/rn-fetch-blob#user-content-installation).

```bash
npm install react-native-img-cache --save
```

## Usage

### CachedImage

The `CachedImage` component assumes that the image URI will never change. The image is stored and served from the application cache. This component accepts the same properties than `Image` except for a few difference:
* `source` doesn't accept an array of image URIs like `Image` does. Please file an issue if that's something you would like to see supported.
* The `uri` property in `source` is mandatory.
* The `body` property in `source` is not supported. Please file an issue if that's something you would like to see supported.

```jsx
import {CachedImage} from "react-native-img-cache";

<CachedImage source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }} />
```

The `mutable` property implies assumes that the image URI can change over time. The lifetime of this cache is the one of the running application and it can be manually busted using `ImageCache`.

```jsx
import {CachedImage} from "react-native-img-cache";

<CachedImage source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }} mutable />
```

### Custom Image Component

By default, the `CachedImage` component is using the [standard RN Image component](https://facebook.github.io/react-native/docs/image.html).
It is possible however to use a different component via `CustomCachedImage`. In the example below, we use the `Image` component from [react-native-image-progress](https://github.com/oblador/react-native-image-progress).

```jsx
import {CustomCachedImage} from "react-native-img-cache";

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

<CustomCachedImage
  component={Image}
  source={{ uri: 'http://loremflickr.com/640/480/dog' }} 
  indicator={ProgressBar} 
  style={{
    width: 320, 
    height: 240, 
  }}/>
```

### ImageCache

#### clear()

Remove cache entries and all physical files.

```js
ImageCache.get().clear();
```

#### bust(uri)

`ImageCache` can be used to bust an image from the local cache.
This removes the cache entry but it **does not remove any physical files**.

```js
ImageCache.get().bust("https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg");
```

#### cancel(uri)

It can also be used to cancel the download of an image. This can be very useful when [scrolling through images](https://medium.com/@wcandillon/image-pipeline-with-react-native-listview-b92d4768b17c).

```js
ImageCache.get().cancel("https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg");
```

#### on(uri, observer, immutable)

The `ImageCache` class can register observers to the cache.

```js
const immutable = true;
const observer = (path: string) => {
    console.log(`path of the image in the cache: ${path}`);
};
ImageCache.get().on(uri, observer, immutable);
```

We use the observer pattern instead of a promise because a mutable image might have different version with different paths in the cache.

#### dispose(uri, observer)

Observers can be deregistered using `dispose`:

```js
ImageCache.get().dispose(uri, observer);
```

## Testing with jest

### Mocking CachedImage

With jest, testing a snapshot can generate errors. Jest doesn't know how to generate the component CachedImage. For fix this, you have to mock CachedImage with Image component.

```js
jest.mock('react-native-img-cache', () => {
  const mockComponent = require('react-native/jest/mockComponent')
  return {
    CustomCachedImage: mockComponent('Image'),
    CachedImage: mockComponent('Image'),
  }
})
```
