function highlight_subject() {
    

    const timetableRows = document.querySelectorAll('#timetable-container table tr');

    let date = new Date();
    let day = date.getDay(); // Convert the day value to match the table's indexing
    let time = date.getHours() * 100 + date.getMinutes();
    
    console.log(time)

    console.log('Current Date:', date.toLocaleDateString());
    console.log('Current Time:', date.toLocaleTimeString());
    console.log('Current Day:', day);
    
    // SUNDAY NOTHING
    if (day == 0) {
      console.log("It's Sunday");
      return;
    
    } else {
      console.log("It's not sunday")
    };
    
    // Check if current time is between 12:00 PM and 1:25 PM // BREAK TIME
    
    if (time >= 1150 && time <= 1325) {

      let break_ele=document.getElementById('break');
      break_ele.setAttribute("class", "subject");
      console.log("It's Break Time");

    }else {

      console.log("It's not Break Time");

    }


    // Loop through the rows of the table, starting from the second row (first row is the header)
    for (let i = 1; i < timetableRows.length; i++) {

      const row = timetableRows[i];
      let startTime = parseInt(row.cells[0].innerText.slice(0, 5).replace(':', ''), 10);
      let endTime = parseInt(row.cells[0].innerText.slice(8).replace(':', ''), 10);
      
      
      
      // Check if the current time falls within the time slot of this row and if it's the correct day
      if (startTime <= time && time < endTime) {

          console.log(`Current TR : start : ${startTime} : end : ${endTime} : Lec Found TIME is : ${time}`)
          let sub=row.getElementsByTagName('td')
          sub[day].setAttribute("class", "subject")
        

      };
    };
  };
  
highlight_subject();


