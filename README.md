This simple app was written in React Native, TypeScript and Expo. All the dependencies you can see in the package.json file. In the file App.tsx it's connected Redux. For more development comfort it's also connected Redux Saga. In the "assets" folder is located fonts and images, but images are default. All the components are located in the "components" folder. In the "constant" folder are located all the constant. They are divided into files. In the "helpers" folder is located one helper function but you can add such functions. The "useFonts" hook is located in the "hooks" folder. You also can add such hooks. In the "navigation" folder is located all the navigation of the app. In the "screen" folder are located all the screens of the app. In the "store" folder logic described of Redux. In the "style" flder described global style. In the "types.ts" file is located all the types and interfaces of the app.

To run the application:

    git clone https://github.com/alexandr-229/react_native_test.git

    cd react_native_test

    npm install

    add ".env" file

    write into it:

    	API_TOKEN: <Your https://openweathermap.org/ token>

    	CITY_ID: <Id of the city>(optional)

    npm run start
