import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React, { useRef } from "react";

export default function Tawk() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.minimize();
    }
  };

  return (
    <div className="App">
      <TawkMessengerReact
        propertyId="y6768022749e2fd8dfefbea20"
        widgetId="default"
        ref={tawkMessengerRef}
      />
    </div>
  );
}
