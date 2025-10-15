"use client";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useState, useEffect } from "react";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}



const Agent = ({userName}: AgentProps) => {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const isSpeaking = true;
  return (
    <>
    <div className="call-view">
        <div className="card-interviewer">
            <div className="avatar">
                <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
                {isSpeaking && <span className="animate-speak"></span>}
            </div>
            <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
    </div>
        <div className="w-full flex justify-center">
            {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call" onClick={() => handleCall()}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={() => handleDisconnect()}>
            End
          </button>
        )}
      </div>
    
        
    </>
  );
  
}

export default Agent;
