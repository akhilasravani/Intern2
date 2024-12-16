const properties = [
    {
      id: 1,
      name: 'Luxury Apartment in New York',
      location: 'New York',
      price: 1200000,
      imageUrl: 'https://media.istockphoto.com/id/696919864/photo/modern-loft-apartment-3d-rendering.jpg?s=612x612&w=0&k=20&c=snCd0B5eywqzwELIKtVgvIYs80xCup62LUvSt5GWavw=',
      description: 'A stunning luxury apartment in the heart of New York.'
    },
    {
      id: 2,
      name: 'Beach House in Miami',
      location: 'Miami',
      price: 950000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlIhjUHEIeQqbnFT5Zeiz_JAlU2C-bux1dw&s',
      description: 'A beautiful beach house with ocean views.'
    },
    {
      id: 3,
      name: 'Countryside Villa in Tuscany',
      location: 'Tuscany',
      price: 1500000,
      imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5d794057c0e1890008d1238c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
      description: 'A peaceful countryside villa in Tuscany.'
    },
    {
      id: 4,
      name: 'Modern Home in Los Angeles',
      location: 'Los Angeles',
      price: 2000000,
      imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/35bef68/2147483647/strip/true/crop/1280x659+0+0/resize/1200x618!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1a%2F7c%2F12a55d014839a0f0a6a3a0c46496%2Fimage-1.jpeg',
      description: 'A modern home located in Los Angeles with city views.'
    }
  ];
  
  const propertyList = document.getElementById('propertyList');
  
  // Function to render properties
  function renderProperties(propertiesToRender) {
    propertyList.innerHTML = '';
    propertiesToRender.forEach((property) => {
      const propertyCard = document.createElement('div');
      propertyCard.className = 'property-card';
      propertyCard.innerHTML = `
        <img src="${property.imageUrl}" alt="${property.name}">
        <h2>${property.name}</h2>
        <p>Location: ${property.location}</p>
        <p>Price: $${property.price.toLocaleString()}</p>
        <p>${property.description}</p>
      `;
      propertyList.appendChild(propertyCard);
    });
  }
  
  // Initial render
  renderProperties(properties);
  
  // Function to filter properties
  function filterProperties() {
    const locationFilter = document.getElementById('locationFilter').value.toLowerCase();
    const minPrice = document.getElementById('minPriceFilter').value;
    const maxPrice = document.getElementById('maxPriceFilter').value;
  
    const filteredProperties = properties.filter((property) => {
      const matchesLocation = property.location.toLowerCase().includes(locationFilter);
      const matchesMinPrice = !minPrice || property.price >= minPrice;
      const matchesMaxPrice = !maxPrice || property.price <= maxPrice;
  
      return matchesLocation && matchesMinPrice && matchesMaxPrice;
    });
  
    renderProperties(filteredProperties);
  }
