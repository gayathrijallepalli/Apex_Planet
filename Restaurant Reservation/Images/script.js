const districts = [
    {
      name: "Anakapalli",
      dish: "Chepala Pulusu",
      desc: "Spicy fish curry simmered in tamarind and spices.",
      img: "Task 1/Images/Anakapalli fish curry.jpg"
    },
    {
      name: "Ananthapuramu",
      dish: "Ragi Sangati & Natu Kodi",
      desc: "Finger millet with spicy country chicken curry.",
      img: "Task 1/Images/Ananthapuram ragisankati.jpeg"
    },
    {
      name: "Chittoor",
      dish: "Pulihora",
      desc: "Tangy tamarind rice spiced with green chilies.",
      img: "Task 1/Images/pulihora-chittor.jpeg"
    },
    {
      name: "East Godavari",
      dish: "Pesarattu",
      desc: "Green gram dosa served with ginger chutney.",
      img: "Task 1/Images/eastgod-pesarattu.JPG"
    },
    {
      name: "West Godavari",
      dish: "Pootharekulu",
      desc: "Delicate rice starch sweets with ghee and jaggery.",
      img: "Task 1/Images/putharekulu-westgd.webp"
    },
    {
      name: "Kakinada",
      dish: "Kakinada Kaja",
      desc: "Crispy, syrupy dessert made from wheat flour.",
      img: "Task 1/Images/kakinada-kaja.jpg"
    },
    {
      name: "Vizianagaram",
      dish: "Garelu",
      desc: "Deep-fried lentil donuts served with chutney.",
      img: "Task 1/Images/vizayanagaram.jpeg"
    },
    {
      name: "Visakhapatnam",
      dish: "Royyala Vepudu",
      desc: "Spicy prawn fry with onions and spices.",
      img: "Task 1/Images/vizag.jpg"
    },
    {
      name: "Nellore",
      dish: "Nellore Chepala Pulusu",
      desc: "Sour and spicy fish curry from the region.",
      img: "Task 1/Images/nellorre.jpg"
    },
    {
      name: "Krishna",
      dish: "Gongura Mutton",
      desc: "Mutton cooked with tangy sorrel leaves.",
      img: "Task 1/Images/gmutton-krishna.jpeg"
    },
    {
      name: "Guntur",
      dish: "Mirchi Bajji",
      desc: "Stuffed and deep-fried green chilies.",
      img: "Task 1/Images/guntur-mirchi bajji.jpg"
    },
    {
      name: "Prakasam",
      dish: "Ulava Charu",
      desc: "Horse gram soup served with rice or cream.",
      img: "Task 1/Images/prakasam-ulava charu.jpeg"
    },
    {
      name: "Kadapa",
      dish: "Kunda Biryani",
      desc: "Unique layered biryani cooked in earthen pots.",
      img: "Task 1/Images/kadapa-kunda biryani.jpg"
    },
    {
      name: "Kurnool",
      dish: "Jonna Rotte",
      desc: "Jowar rotis with spicy side dishes.",
      img: "Task 1/Images/jonna rotte-kurnool.jpeg"
    },
    {
      name: "Nandyal",
      dish: "Ragi Mudda",
      desc: "Ball of finger millet served with spicy dal.",
      img: "Task 1/Images/nandyala-ragimudda.jpeg"
    },
    {
      name: "Tirupati",
      dish: "Laddu",
      desc: "World-famous Tirupati prasadam made of ghee and sugar.",
      img: "Task 1/Images/tirupati-laddu.jpg"
    },
    {
      name: "Bapatla",
      dish: "Avakaya",
      desc: "Spicy mango pickle unique to the region.",
      img: "Task 1/Images/bapatla-avakaya.webp"
    },
    {
      name: "Eluru",
      dish: "Chakinalu",
      desc: "Crispy rice flour snacks deep-fried to perfection.",
      img: "Task 1/Images/Chakinalu-ELURU.jpg"
    },
    {
      name: "Palnadu",
      dish: "Chicken Fry",
      desc: "Country-style chicken fry with spicy masala.",
      img: "Task 1/Images/chicken fry -palnadu.JPG"
    },
    {
      name: "NTR",
      dish: "Bobbatlu",
      desc: "Sweet flatbreads stuffed with dal and jaggery.",
      img: "Task 1/Images/NTR-BOBBA.jpg"
    },
    {
      name: "Sri Sathya Sai",
      dish: "Chakkara Pongal",
      desc: "Sweet rice pudding offered in temples.",
      img: "Task 1/Images/chakkari pongal-sri sathya sai.jpeg"
    },
    {
      name: "Parvathipuram Manyam",
      dish: "Rasam",
      desc: "Peppery tamarind soup with herbs.",
      img: "Task 1/Images/rsam-parvathi puram.jpg"
    },
    {
      name: "Alluri Sitarama Raju",
      dish: "Bamboo Chicken",
      desc: "Chicken cooked inside bamboo trunks over fire.",
      img: "Task 1/Images/bamboo chicken-alluri sitarama raju.jpeg"
    },
    {
      name: "Dr. B.R. Ambedkar Konaseema",
      dish: "Prawns Curry",
      desc: "Fresh water prawns in spicy gravy.",
      img: "Task 1/Images/prawns curry-dr br ambedkhar.jpg"
    },
    {
      name: "Tiruvuru",
      dish: "Pachi Pulusu",
      desc: "Raw tamarind juice with onions and spices.",
      img: "Task 1/Images/pacchipulusu-tiruvuru.jpg"
    }
  ];

  const nav = document.querySelector('nav');
  const districtContainer = document.getElementById('districts');
  const select = document.getElementById('district');

  districts.forEach(d => {
    // Navigation Links
    const navLink = document.createElement('a');
    navLink.href = `#${d.name}`;
    navLink.textContent = d.name;
    nav.appendChild(navLink);

    // District Section
    const section = document.createElement('section');
    section.id = d.name;
    section.className = 'district';
    section.innerHTML = `
      <h2>${d.name} - ${d.dish}</h2>
      <p>${d.desc}</p>
      <img src="${d.img}" alt="${d.dish}" width="300">
    `;
    districtContainer.appendChild(section);

    // Select Dropdown
    const option = document.createElement('option');
    option.value = d.name;
    option.textContent = d.name;
    select.appendChild(option);
  });

  function reserveTable() {
    const name = document.getElementById('name').value.trim();
    const district = document.getElementById('district').value;
    const date = document.getElementById('date').value;

    if (!name || !district || !date) {
      alert('Please fill all required fields.');
      return false;
    }

    alert(`Thank you, ${name}!\nYour table is reserved for ${district} district on ${date}.`);
    return false; // Prevent actual form submission
  }