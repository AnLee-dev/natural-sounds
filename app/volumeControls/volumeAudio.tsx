"use client";
type Props = {
  volume: number;
  handleVolumeChange: (newVolume: number) => void;
};

function VolumeAudio ({ volume, handleVolumeChange }: Props) {
  const handleChangeInVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange(Number(e.target.value));
  };

  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.02}
      value={volume}
      onChange={handleChangeInVolume}
      className="w-24 absolute appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:bottom-2 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
    />
  );
};

export default VolumeAudio;
