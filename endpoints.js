const endpoints = {
  endpoints: {
    "GET /api": {
      description:
        "serves up a json representation of all the available endpoints of the api",
    },
    "GET /api/stadiums": {
      description: "serves an array of all stadiums",
      queries: ["city", "country", "capacity", "sort_by", "order"],
      exampleResponse: {
        stadiums: [
          {
            stadium_id: 2,
            name: 'amex stadium',
            city: 'brighton & hove',
            logo: 'https://seeklogo.com/images/F/fc-brighton-and-hove-albion-logo-767C689AE8-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/amex_top.jpg',
            longitude: '-0.08167',
            latitude: '50.86063',
            color: '#0057B8',
            club: 'brighton and hove albion',
            country: 'england',
            capacity: 30666,
            postcode: 'BN19BL',
            description: 'The Seagulls” had to leave their Goldstone Ground in 1997, two years after the club sold the ground. They had no alternative venue in Brighton, so were playing 75km away in Gillingham. Though attempts to build a new home stadium started back in the 1990’s, no success came for a decade. Supporters were running several large-scale campaigns that even got the prime minister involved, but for years procedural issues and opposition held the project back.Finally at the end of 2008 construction works started on site and finished in early June 2011. The result was American Express Community Stadium, as it’s called for sponsorship reasons. But since no-one really cares to say the whole name, it’s more often called AmEx Stadium or simply The AmEx. There also are some more traditional supporters who refuse to acknowledge the name, still calling it Falmer Stadium, as was the name during planning and construction.but however they call it, it’s still a 22,347-seater worth Ł105mln. The seats were divided into four separate stands. Main one has three tiers and accommodates over half the capacity – 11,833. Opposite is the family stand (5,404) while behind both goals there are ends for the more vocal locals (north – 2,688 seats) and away fans (2,575).If demand is high, corners may be filled and current stands may also receive a second tier to give a capacity of 35,000. Which proved needed as already during construction it turned out that the planned 2,109 business seats was too little and another 400 were made. By mid-2013 stands had to grow further, reaching 30,750.'
          },
          {
            stadium_id: 1,
            name: 'anfield',
            city: 'liverpool',
            logo: 'https://seeklogo.com/images/L/liverpool-fc-logo-3B886CFE17-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/anfield_top.jpg',
            longitude: '-2.96067',
            latitude: '53.43173',
            color: '#C8102E',
            club: 'liverpool fc',
            country: 'england',
            capacity: 53394,
            postcode: 'L40TH',
            description: "Although it operates since 1884, the first tenant was not LFC, but Everton. But since the club could not buy the ground from its owner, they moved to Goodison Park. The move left John Orrell with an empty stadium so he launched Liverpool FC. The club started playing in 1892 and by 1906 already had 2 championships on their account. During that time three new stands were raised. In 1928 history of the world's most famous stand began, as The Kop was expanded to accomodate 30,000 standing fans. For decades this has been the central point for Liverpool FC fanbase. Further redevelopments allowed the club to achieve a record audience of over 61,000 in 1952 and play their first game with floodlights in 1957. Crucial changes came in the 90's as a result of Taylor Report, published after Hillsborough disaster. Currently the stadium comemorises 96 victims of that day with an eternal flame. Legendary manager Bill Shankly also has his place at Anfield with a monument and a gate named after him.In 2014-2016 the stadium underwent its largest partial reconstruction to date. The western main stand grew from one to three tiers, dominating the stadium and landscape. Thanks to this change, LFC are able to invite over 50,000 fans for the first time since conversion to all-seating capacity. The club also has outline planning permission for similar expansion to follow along Anfield Road."
          },
          {
            stadium_id: 4,
            name: 'old trafford',
            city: 'manchester',
            logo: 'https://seeklogo.com/images/M/manchester-united-logo-F14DA1FCCD-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/oldtrafford_top.jpg',
            longitude: '-2.28827',
            latitude: '53.461658',
            color: '#DA291C',
            club: 'manchester united',
            country: 'england',
            capacity: 76000,
            postcode: 'M160RA',
            description: 'It is the most remarkable arena I have ever seen. As a football ground it is unrivalled in the world. It is an honour to Manchester.” is what The Sporting Chronicle wrote about Old Trafford upon opening in February of 1910. Quite a welcome, but the stadium proved worthy of its reputation over the years.Before moving to Old Trafford, the great Man United began as Newton Heath and only earned its current name after the old club dissolved in early 20th century. By 1909, just 7 years into its operation as United, owner of local brewery and chairman of the club, John Henry Davies, pumped £90,000 into construction of a brand new stadium with open-air embankments on three sides and a covered main grandstand in the south'
          },
          {
            stadium_id: 3,
            name: 'bramel lane',
            city: 'sheffield',
            logo: 'https://seeklogo.com/images/S/sheffield-utd-fc-logo-CD59BF0954-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/bramalllane_top.jpg',
            longitude: '-1.46996',
            latitude: '53.36903',
            color: '#EE2737',
            club: 'sheffield united',
            country: 'england',
            capacity: 32702,
            postcode: 'S24SU',
            description: 'Pretty much every football ground has a history to speak of in its own way, but Bramall Lane’s history knocks them all out of the water. The home of Sheffield United is actually the oldest professional football ground in the world, having hosted its first match as far back as 1862. The ground has its own claim to fame in a more modern sense, too, as it was the first to host a floodlit football match, which it did on the 14th of October 1878.The uniqueness of Bramall Lane doesn’t stop there. It is one of only two stadiums in the world that has hosted an England football international match, an England cricket test match and an FA Cup Final. England’s national side played five internationals at the Sheffield ground before 1930, whilst the cricket test match came in 1902 when England played Australia. The FA Cup final was actually a replay between Barnsley and West Brom, a match that Barnsley won 1-0.'
          }
        ]
      },
    },
    "GET /api/stadiums/:stadiumId": {
      description: "serves up stadium at a given Id",
      exampleResponse: {
        stadium: {
          stadium_id: 1,
          name: 'anfield',
          city: 'liverpool',
          logo: 'https://seeklogo.com/images/L/liverpool-fc-logo-3B886CFE17-seeklogo.com.png',
          picture: 'https://www.stadiumguide.com/wp-content/uploads/anfield_top.jpg',
          longitude: '-2.96067',
          latitude: '53.43173',
          color: '#C8102E',
          club: 'liverpool fc',
          country: 'england',
          capacity: 53394,
          postcode: 'L40TH',
          description: "Although it operates since 1884, the first tenant was not LFC, but Everton. But since the club could not buy the ground from its owner, they moved to Goodison Park. The move left John Orrell with an empty stadium so he launched Liverpool FC. The club started playing in 1892 and by 1906 already had 2 championships on their account. During that time three new stands were raised. In 1928 history of the world's most famous stand began, as The Kop was expanded to accomodate 30,000 standing fans. For decades this has been the central point for Liverpool FC fanbase. Further redevelopments allowed the club to achieve a record audience of over 61,000 in 1952 and play their first game with floodlights in 1957. Crucial changes came in the 90's as a result of Taylor Report, published after Hillsborough disaster. Currently the stadium comemorises 96 victims of that day with an eternal flame. Legendary manager Bill Shankly also has his place at Anfield with a monument and a gate named after him.In 2014-2016 the stadium underwent its largest partial reconstruction to date. The western main stand grew from one to three tiers, dominating the stadium and landscape. Thanks to this change, LFC are able to invite over 50,000 fans for the first time since conversion to all-seating capacity. The club also has outline planning permission for similar expansion to follow along Anfield Road."
        },
      },
    },
    "GET /api/stadium/:stadiumId/comments": {
      description: "serves an array of all comments of a given stadium",
      queries: [
        "created_at",
        "comment_id",
        "transport",
        "pubsNearGround",
        "valueForMoneyInGround",
        "sort_by",
        "order",
      ],
      exampleResponse: {
        comments: [
          {
            comment_id: 1,
            stadium_id: 1,
            valueForMoneyInGround: 5,
            transport: 5,
            pubsNearGround: 6,
            created_at: "2016-07-09T18:40:38.932Z",
            thoughts:
              "Great Ground. Not great transport links, had to get a taxi but otherwise good",
          },
          {
            comment_id: 2,
            stadium_id: 1,
            valueForMoneyInGround: 7,
            transport: 3,
            pubsNearGround: 6,
            created_at: "2016-07-09T17:17:18.932Z",
            thoughts: "Transport awful - had to walk to the ground",
          },
        ],
      },
    },
    "POST /api/stadiums/:stadiumId/comments": {
      description: "post a comment about a stadium",
      exampleResponse: {
        users: {
          comment_id: 3,
          stadium_id: 1,
          valueForMoneyInGround: 6,
          transport: 5,
          pubsNearGround: 7,
          created_at: "2016-07-09T18:23:58.932Z",
          thoughts: "Good ground. Shame we lost 5-0",
        },
      },
    },
    "GET api/countries/:country": {
      description: "serves an array of stadiums of a specified country",
      queries: ["city", "capacity", "sort_by", "order"],
      exampleResponse: {
        stadiums: [
          {
            stadium_id: 2,
            name: 'amex stadium',
            city: 'brighton & hove',
            logo: 'https://seeklogo.com/images/F/fc-brighton-and-hove-albion-logo-767C689AE8-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/amex_top.jpg',
            longitude: '-0.08167',
            latitude: '50.86063',
            color: '#0057B8',
            club: 'brighton and hove albion',
            country: 'england',
            capacity: 30666,
            postcode: 'BN19BL',
            description: 'The Seagulls” had to leave their Goldstone Ground in 1997, two years after the club sold the ground. They had no alternative venue in Brighton, so were playing 75km away in Gillingham. Though attempts to build a new home stadium started back in the 1990’s, no success came for a decade. Supporters were running several large-scale campaigns that even got the prime minister involved, but for years procedural issues and opposition held the project back.Finally at the end of 2008 construction works started on site and finished in early June 2011. The result was American Express Community Stadium, as it’s called for sponsorship reasons. But since no-one really cares to say the whole name, it’s more often called AmEx Stadium or simply The AmEx. There also are some more traditional supporters who refuse to acknowledge the name, still calling it Falmer Stadium, as was the name during planning and construction.but however they call it, it’s still a 22,347-seater worth Ł105mln. The seats were divided into four separate stands. Main one has three tiers and accommodates over half the capacity – 11,833. Opposite is the family stand (5,404) while behind both goals there are ends for the more vocal locals (north – 2,688 seats) and away fans (2,575).If demand is high, corners may be filled and current stands may also receive a second tier to give a capacity of 35,000. Which proved needed as already during construction it turned out that the planned 2,109 business seats was too little and another 400 were made. By mid-2013 stands had to grow further, reaching 30,750.'
          },
          {
            stadium_id: 1,
            name: 'anfield',
            city: 'liverpool',
            logo: 'https://seeklogo.com/images/L/liverpool-fc-logo-3B886CFE17-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/anfield_top.jpg',
            longitude: '-2.96067',
            latitude: '53.43173',
            color: '#C8102E',
            club: 'liverpool fc',
            country: 'england',
            capacity: 53394,
            postcode: 'L40TH',
            description: "Although it operates since 1884, the first tenant was not LFC, but Everton. But since the club could not buy the ground from its owner, they moved to Goodison Park. The move left John Orrell with an empty stadium so he launched Liverpool FC. The club started playing in 1892 and by 1906 already had 2 championships on their account. During that time three new stands were raised. In 1928 history of the world's most famous stand began, as The Kop was expanded to accomodate 30,000 standing fans. For decades this has been the central point for Liverpool FC fanbase. Further redevelopments allowed the club to achieve a record audience of over 61,000 in 1952 and play their first game with floodlights in 1957. Crucial changes came in the 90's as a result of Taylor Report, published after Hillsborough disaster. Currently the stadium comemorises 96 victims of that day with an eternal flame. Legendary manager Bill Shankly also has his place at Anfield with a monument and a gate named after him.In 2014-2016 the stadium underwent its largest partial reconstruction to date. The western main stand grew from one to three tiers, dominating the stadium and landscape. Thanks to this change, LFC are able to invite over 50,000 fans for the first time since conversion to all-seating capacity. The club also has outline planning permission for similar expansion to follow along Anfield Road."
          },
          {
            stadium_id: 4,
            name: 'old trafford',
            city: 'manchester',
            logo: 'https://seeklogo.com/images/M/manchester-united-logo-F14DA1FCCD-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/oldtrafford_top.jpg',
            longitude: '-2.28827',
            latitude: '53.461658',
            color: '#DA291C',
            club: 'manchester united',
            country: 'england',
            capacity: 76000,
            postcode: 'M160RA',
            description: 'It is the most remarkable arena I have ever seen. As a football ground it is unrivalled in the world. It is an honour to Manchester.” is what The Sporting Chronicle wrote about Old Trafford upon opening in February of 1910. Quite a welcome, but the stadium proved worthy of its reputation over the years.Before moving to Old Trafford, the great Man United began as Newton Heath and only earned its current name after the old club dissolved in early 20th century. By 1909, just 7 years into its operation as United, owner of local brewery and chairman of the club, John Henry Davies, pumped £90,000 into construction of a brand new stadium with open-air embankments on three sides and a covered main grandstand in the south'
          },
          {
            stadium_id: 3,
            name: 'bramel lane',
            city: 'sheffield',
            logo: 'https://seeklogo.com/images/S/sheffield-utd-fc-logo-CD59BF0954-seeklogo.com.png',
            picture: 'https://www.stadiumguide.com/wp-content/uploads/bramalllane_top.jpg',
            longitude: '-1.46996',
            latitude: '53.36903',
            color: '#EE2737',
            club: 'sheffield united',
            country: 'england',
            capacity: 32702,
            postcode: 'S24SU',
            description: 'Pretty much every football ground has a history to speak of in its own way, but Bramall Lane’s history knocks them all out of the water. The home of Sheffield United is actually the oldest professional football ground in the world, having hosted its first match as far back as 1862. The ground has its own claim to fame in a more modern sense, too, as it was the first to host a floodlit football match, which it did on the 14th of October 1878.The uniqueness of Bramall Lane doesn’t stop there. It is one of only two stadiums in the world that has hosted an England football international match, an England cricket test match and an FA Cup Final. England’s national side played five internationals at the Sheffield ground before 1930, whilst the cricket test match came in 1902 when England played Australia. The FA Cup final was actually a replay between Barnsley and West Brom, a match that Barnsley won 1-0.'
          }
        ],
      },
    },
  },
};

module.exports = endpoints;
