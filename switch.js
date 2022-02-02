const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const label=document.querySelector("#label");
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      label.innerHTML="DARK MODE:ON";

    } else {
      document.documentElement.setAttribute("data-theme", "light");
      label.innerHTML="DARK MODE:OFF";
    }
  }
  
  toggleSwitch.addEventListener("change", switchTheme, false);