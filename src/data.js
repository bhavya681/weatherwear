const clothingSuggestions = [
    {
      condition: 'hot',
      tempRange: [30, Infinity],
      suggestions: [
        { name: 'Shorts', description: 'Light and comfortable shorts', imageUrl: 'https://media.istockphoto.com/id/2011506504/photo/brown-cargo-shorts-on-a-snow-background.jpg?s=2048x2048&w=is&k=20&c=nDJHr6v2Xe_iMjT-BUNDbGdYruWBZMMkU5eUPkqyneg=' },
        { name: 'T-Shirt', description: 'Breathable cotton t-shirt', imageUrl: 'https://media.istockphoto.com/id/1633583827/photo/young-boy-listening-music-and-dancing-on-white-background.jpg?s=2048x2048&w=is&k=20&c=NabDfw-lGR6BzQb0rHlqsdqXesQFmnuD3UQTWxOMASk=' },
        { name: 'Sunglasses', description: 'Protect your eyes from the sun', imageUrl: 'https://cdn.pixabay.com/photo/2017/08/01/09/41/people-2564026_1280.jpg' }
      ]
    },
    {
      condition: 'warm',
      tempRange: [20, 30],
      suggestions: [
        { name: 'Jeans', description: 'Comfortable denim jeans', imageUrl: 'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_960_720.jpg' },
        { name: 'T-Shirt', description: 'Casual t-shirt', imageUrl: 'https://cdn.pixabay.com/photo/2020/05/25/03/28/beard-5216821_960_720.jpg' },
        { name: 'Light Jacket', description: 'A light jacket for the evening', imageUrl: 'https://cdn.pixabay.com/photo/2018/06/30/02/38/sunset-on-the-beach-3506982_960_720.jpg' }
      ]
    },
    {
      condition: 'cool',
      tempRange: [10, 20],
      suggestions: [
        { name: 'Sweater', description: 'Warm sweater', imageUrl: 'https://cdn.pixabay.com/photo/2017/08/06/09/12/people-2590555_960_720.jpg' },
        { name: 'Jeans', description: 'Comfortable jeans', imageUrl: 'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_960_720.jpg' },
        { name: 'Light Coat', description: 'A light coat for extra warmth', imageUrl: 'https://cdn.pixabay.com/photo/2021/10/03/04/21/woman-6676901_960_720.jpg' }
      ]
    },
    {
      condition: 'cold',
      tempRange: [-Infinity, 10],
      suggestions: [
        { name: 'Heavy Coat', description: 'Warm and heavy coat', imageUrl: 'https://cdn.pixabay.com/photo/2021/09/26/10/56/woman-6657212_960_720.jpg' },
        { name: 'Scarf', description: 'Cozy scarf', imageUrl: 'https://media.istockphoto.com/id/960213848/photo/its-cold-out-here-i-have-to-cover-up.jpg?s=2048x2048&w=is&k=20&c=Y-hsTfRLdAMx8Dv37P_DGy6BjAy9sNRcPQ88ywo3XRI=' },
        { name: 'Gloves', description: 'Warm gloves', imageUrl: 'https://media.istockphoto.com/id/464542668/photo/freezing.jpg?s=2048x2048&w=is&k=20&c=YQ-szEl9WvI-hktTcvlt9vWCJCVa1hdxKBY52ToveXQ=' }
      ]
    }
  ];
  
  export default clothingSuggestions;
  