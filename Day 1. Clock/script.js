function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = ((hour % 12) + minute / 60) * 30;
  // 360 / 12 = 30 - because each interval is an hour, the degree has to change every hour, there are 12 hours in an analog clock. So you divide the total 360 degrees by 12 hours. The change has to occur every 30 degrees.
  const minuteDeg = (minute + second / 60) * 6;
  // 360 / 60 = 6 - in this case the change has to occur every 6 degrees.
  const secondDeg = second * 6; //360 / 60 = 6

  document.querySelector(".hand.hour").style.transform = 
  ` translateX(-50%) rotate(${hourDeg}deg)`;
  document.querySelector(".hand.minutes").style.transform = 
  ` translateX(-50%) rotate(${minuteDeg}deg)`;
  document.querySelector(".hand.seconds").style.transform = 
  ` translateX(-50%) rotate(${secondDeg}deg)`;
}

  setInterval(updateClock, 1000);
  updateClock(); //Initial call