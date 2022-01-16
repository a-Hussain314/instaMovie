# instaMovie
## About
React Native app that displays a list of movies fetched through "TMDB" API, and allows users to add their own.

<table>
  <tr>
    <td><p align="center"><img src="https://i.ibb.co/dW9w73W/Screenshot-2022-01-16-23-15-56-441-com-instamovie.jpg" width="300"  ></p></td>
    <td><p align="center"><img src="https://i.ibb.co/ccj7CcQ/Screenshot-2022-01-16-23-19-07-183-com-instamovie.jpg" width="300"  ></p></td>
  </tr>
  <tr>
    <td><p align="center"><img src="https://i.ibb.co/xM9kbjV/Screenshot-2022-01-16-23-16-08-265-com-instamovie.jpg" width="300"  ></p></td>
    <td><p align="center"><img src="https://i.ibb.co/yVmw7HC/Screenshot-2022-01-16-23-16-14-378-android.jpg" width="300"  ></p></td>
     <td><p align="center"><img src="https://i.ibb.co/9ZK8KcG/Screenshot-2022-01-16-23-17-52-508-com-instamovie.jpg" width="300"  ></p></td>
  </tr>
  <tr>
    <td><p align="center"><img src="https://i.ibb.co/x2SHn12/Screenshot-2022-01-16-23-17-59-514-com-instamovie.jpg" width="300"  ></p></td>
    <td><p align="center"><img src="https://i.ibb.co/f2DsJFq/Screenshot-2022-01-16-23-18-36-278-com-instamovie.jpg" width="300"  ></p></td>
  </tr>
</table>









## How to run

Follow these instructions from react-natice docs to install the required tools to run react-native apps [reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup), then :


###  1 - Start Metro

First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

To start Metro, run  `npx react-native start`  inside your React Native project folder:

```
npx react-native start
```

Copy

`react-native start`  starts Metro Bundler.

> If you use the Yarn package manager, you can use  `yarn`  instead of  `npx`  when running React Native commands inside an existing project.

> If you're familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Kotlin or Java, JavaScript isn't compiled—and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.

### 2 -  Start your application

Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

```
npx react-native run-android
```

Copy

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

![AwesomeProject on Android](https://reactnative.dev/assets/images/GettingStartedAndroidSuccessWindows-7ae949ba8187936ba342678c432d78f6.png)

`npx react-native run-android`  is one way to run your app - you can also run it directly from within Android Studio.

> If you can't get this to work, see the  [Troubleshooting](https://reactnative.dev/docs/troubleshooting)  page.
