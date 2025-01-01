function getAbout() {
    const desc = 'I am a software developer and machine learning engineer with experience in building AI models, Python-based application development, and data processing. I am dedicated to delivering innovative and efficient technological solutions.';
    document.getElementById('desc').innerText = desc; 
    document.getElementById('website').innerText = 'nashirudin-baqiy.github.io';
    document.getElementById('phone').innerText = '+6287870956129';
    document.getElementById('city').innerText = 'Bogor, Indonesia';
    document.getElementById('degree').innerText = 'Bachelor';
    document.getElementById('email').innerText = 'nashirudin.baqiy@gmail.com';
    document.getElementById('freelance').innerText = 'Available';
    const longdesc = 'I am passionate about leveraging technology to solve real-world problems, focusing on delivering impactful results through innovative solutions. With expertise in machine learning, software development, and data-driven decision-making, I aim to contribute to projects that drive progress and efficiency.';
    document.getElementById('longdesc').innerText = longdesc;
}

function getAge() {
    // Define values
    const tlahir = new Date("06-11-2001")
    const opsiTanggal = { year: 'numeric', month: 'long', day: 'numeric' };
    const birthday = tlahir.toLocaleDateString('id-ID', opsiTanggal);

    document.getElementById('tlahir').innerText = birthday; 
    const tanggal = new Date();

    // Calculate age
    let age = tanggal.getFullYear() - tlahir.getFullYear();
    const monthDifference = tanggal.getMonth() - tlahir.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && tanggal.getDate() < tlahir.getDate())) {
        age--;
    }

    document.getElementById('age').innerText = age;
}

getAge();
getAbout();