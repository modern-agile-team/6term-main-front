interface IFunc {
  (date: Date): { ampm: string; hours: string; minutes: string };
}

const timeStamp: IFunc = (date: Date) => {
  let ampm, hours, minutes;

  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();

  ampm = currentHours > 11 ? '오후' : '오전';
  hours = currentHours > 12 ? `${currentHours - 12}` : `${currentHours}`;
  minutes = currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`;

  return { ampm, hours, minutes };
};

export default timeStamp;
