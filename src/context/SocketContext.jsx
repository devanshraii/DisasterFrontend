// src/context/SocketContext.jsx
import React, { createContext, useContext, useRef, useEffect } from "react";
import { io } from "socket.io-client";

// Create the context and export it
export const SocketContext = createContext(null);

// Provider component
export function SocketProvider({ children }) {
  const socket = useRef();

  useEffect(() => {
    socket.current = io(import.meta.env.VITE_API_URL);
    return () => socket.current.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
}

// Optional: custom hook for easier usage
export function useSocket() {
  return useContext(SocketContext);
}
