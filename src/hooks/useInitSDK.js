import appsFlyer from 'react-native-appsflyer';
import {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";


const useInitSDK = () => {
  const [gcd, setGcd] = useState('No data yet...');
  const [oaoa, setOaoa] = useState('No UDL Yet...');
  const APPSFLYER_DEV_KEY = process.env.EXPO_PUBLIC_APPSFLYER_DEV_KEY;
  const ONESIGNAL_ID = process.env.EXPO_PUBLIC_ONESIGNAL_ID;
  const optionAppsflyer = {
    devKey: process.env.EXPO_PUBLIC_APPSFLYER_DEV_KEY,
    onInstallConversionDataListener: true,
    onDeepLinkListener: true,
    timeToWaitForATTUserAuthorization: 5,
    manualStart: true,
  };

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, so we don't need to use `await` here
        console.log('first launch');
      } else {
        console.log('not first launch');
      }
    })
  }, []);

  const initAppsflyer = async () => {
    const onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
        (res) => {
          console.log(res, "res");
          var media_source = res.data.media_source;
          var campaign = res.data.campaign;
          console.log(media_source, "media_source");
          console.log(campaign, "campaign");
          setGcd(media_source);
          setOaoa(campaign);
          console.log('This is first launch and a Non-Organic install. Media source: ' + media_source + ' Campaign: ' + campaign);
        }
    );

    await appsFlyer.onInstallConversionFailure((res) => {
      console.log(res, "res");
    })
    appsFlyer.initSdk(
        optionAppsflyer,
        (result) => {
          console.log(result, "result");
        },
        (error) => {
          console.error(error);
        },
    );
    appsFlyer.logEvent(
        "onInstallConversionDataLoaded",
        {
          "af_status": "Organic",
          "media_source": "Organic",
          "campaign": "Organic",
        },
        (res) => {
          console.log(res);
        },
        (err) => {
          console.error(err);
        }
    );
  };
  useEffect(() => {
    initAppsflyer().then(() => {
      console.log('initAppsflyer');
    });
  }, []);

  useEffect(() => {
    // initAppsflyer();
    console.log('gcd', gcd);
    console.log('oaoa', oaoa);
  }, [gcd, oaoa]);
  return {gcd, ONESIGNAL_ID};
};


export default useInitSDK;