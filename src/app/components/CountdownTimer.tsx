import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  endTime: Date;
  compact?: boolean;
}

export function CountdownTimer({ endTime, compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (compact) {
    return (
      <div className="flex items-center gap-1 text-[#F59E0B]">
        <Clock className="w-3 h-3" />
        <span className="text-xs font-semibold">
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-5 h-5 text-[#F59E0B]" />
      <div className="flex gap-2">
        <div className="bg-[#111827] text-white px-3 py-2 rounded-lg min-w-[50px] text-center">
          <div className="font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-xs text-gray-400">Hours</div>
        </div>
        <div className="flex items-center text-2xl font-bold text-[#111827]">:</div>
        <div className="bg-[#111827] text-white px-3 py-2 rounded-lg min-w-[50px] text-center">
          <div className="font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-xs text-gray-400">Mins</div>
        </div>
        <div className="flex items-center text-2xl font-bold text-[#111827]">:</div>
        <div className="bg-[#111827] text-white px-3 py-2 rounded-lg min-w-[50px] text-center">
          <div className="font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="text-xs text-gray-400">Secs</div>
        </div>
      </div>
    </div>
  );
}
