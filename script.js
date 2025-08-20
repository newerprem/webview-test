function sendMessage(route) {
  // Check if we are inside React Native WebView
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(route);
    console.log("Message sent to React Native:", route);
  } else {
    console.log("Not inside a React Native WebView. Route:", route);
  }
}
