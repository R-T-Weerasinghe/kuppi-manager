import { FunctionComponent, useMemo, type CSSProperties } from "react";

type LeadershipCardType = {
  componentText?: string;
  scheduleDate?: string;
  timeSlotLabel?: string;
  eventDate?: string;
  vectorImageName?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const LeadershipCard: FunctionComponent<LeadershipCardType> = ({
  componentText,
  scheduleDate,
  timeSlotLabel,
  eventDate,
  vectorImageName,
  propWidth,
}) => {
  const tomorrowStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="relative w-[350px] h-[70px] text-left text-sm text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[350px] h-[70px]" />
      <div className="absolute top-[13px] left-[20px] text-xl font-medium">
        {componentText}
      </div>
      <div
        className="absolute top-[44px] left-[20px] inline-block w-[70px] h-[22px]"
        style={tomorrowStyle}
      >
        {scheduleDate}
      </div>
      <div className="absolute top-[44px] left-[129px] text-center inline-block w-[70px] h-[22px]">
        {timeSlotLabel}
      </div>
      <div className="absolute top-[44px] left-[211px] text-right inline-block w-[93px] h-[22px]">
        {eventDate}
      </div>
      <img
        className="absolute top-[27.7px] left-[316.6px] w-[23.81px] h-[17.16px]"
        alt=""
        src={vectorImageName}
      />
    </div>
  );
};

export default LeadershipCard;
