function generateAdmitCard() {
      
      const student = {
        name: prompt("Enter your full name:"),
        age: prompt("Enter your age:"),
        id: prompt("Enter your student ID:"),
        course: prompt("Enter your course:"),
        className: prompt("Enter your class name:"),
        photo: prompt("Enter your profile photo URL (optional):") || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"
      };

      document.getElementById("admitCard").style.display = "block";

      document.getElementById("name").innerHTML = `<span class="bold">Name:</span> ${student.name}`;
      document.getElementById("age").innerHTML = `<span class="bold">Age:</span> ${student.age}`;
      document.getElementById("studentId").innerHTML = `<span class="bold">ID:</span> ${student.id}`;
      document.getElementById("course").innerHTML = `<span class="bold">Course:</span> ${student.course}`;
      document.getElementById("class").innerHTML = `<span class="bold">Class:</span> ${student.className}`;
      document.getElementById("photo").src = student.photo;
    }