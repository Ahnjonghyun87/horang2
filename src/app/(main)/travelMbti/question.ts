interface Option {
  answer: string;
  type: string;
}

export interface Question {
  question: string;
  options: Option[];
}

// export const questions: Question[] = [
//   {
//     question: "여행할 때, 숙소에서 가장 중요한 것은?",
//     options: [
//       { answer: "최고급 호텔, 리조트에서 자는 걸 선호해요", type: "luxury" },
//       { answer: "저렴하고 효율적인 숙소를 찾아요", type: "cheap" },
//       { answer: "편안하고 아늑한 숙소가 중요해요", type: "homebody" },
//       { answer: "숙소는 그저 잠만 자는 곳이에요", type: "wanderer" },
//       { answer: "맛있는 조식이 있어야해요", type: "foodie" },
//     ],
//   },
//   {
//     question: "여행 중 가장 좋아하는 활동은 무엇인가요?",
//     options: [
//       { answer: "지역의 역사와 문화를 탐방해요", type: "cultureLover" },
//       { answer: "여행지, 사람 많은 곳을 찾아다녀요", type: "cityTraveler" },
//       { answer: "산이나 해변에서 야외 액티비티를 즐겨요", type: "active" },
//       { answer: "숙소에서 편하게 쉬며 독서나 영화를 감상해요", type: "homebody" },
//       { answer: "관광지의 쇼핑몰을 꼭 찾아가요", type: "luxury" },
//     ],
//   },
//   {
//     question: "여행 중 액티비티를 즐기시나요?",
//     options: [
//       { answer: "다양한 놀이공원, 축제에 참여하고 모험을 좋아해요", type: "active" },
//       { answer: "주로 자연 속에서 휴식하고, 편안한 시간을 선호해요", type: "relaxationSeeker" },
//       { answer: "쉬지 않고 돌아다니면서 할 수 있는 건 다 해요", type: "wanderer" },
//       { answer: "새로운 도시를 구경하고 여행지 방문을 선호해요", type: "cityTraveler" },
//       { answer: "산책하며 주변을 구경하는 걸로 충분해요", type: "cheap" },
//     ],
//   },
//   {
//     question: "여행지를 고르는 기준이 있나요?",
//     options: [
//       { answer: "그 지역의 특별한 맛집이 있는지 봐요", type: "foodie" },
//       { answer: "문화와 역사에 대한 깊이 있는 경험을 중시해요", type: "cultureLover" },
//       { answer: "특산품, 기념품을 쇼핑하고 싶어요", type: "cityTraveler" },
//       { answer: "구경할 명소와 여행지가 많은지가 중요해요", type: "wanderer" },
//       { answer: "자연 경관과 휴식을 우선시해요", type: "relaxationSeeker" },
//     ],
//   },
//   {
//     question: "사진 찍기를 좋아하시나요?",
//     options: [
//       { answer: "모든 순간을 사진으로 남기고 싶어요", type: "wanderer" },
//       { answer: "기념사진은 찍지만 순간을 즐기는 게 더 좋아요", type: "homebody" },
//       { answer: "인물사진을 주로 찍어요", type: "active" },
//       { answer: "멋진 건축물, 자연, 경관을 찍어요", type: "cultureLover" },
//       { answer: "사진 찍는 건 별로 좋아하지 않아요", type: "relaxationSeeker" },
//     ],
//   },
//   {
//     question: "여행 중 쇼핑은 얼마나 중요한가요?",
//     options: [
//       { answer: "최신 트렌드를 따르는 쇼핑을 좋아해요", type: "luxury" },
//       { answer: "그 지역 먹거리를 구매하는 걸 선호해요", type: "foodie" },
//       { answer: "주로 꼭 필요한 것만 사요", type: "cheap" },
//       { answer: "쇼핑보다는 경험을 중요시해요", type: "wanderer" },
//       { answer: "지역 특산품은 꼭 사와요", type: "cityTraveler" },
//     ],
//   },
//   {
//     question: "자연 속에서 보내는 시간을 좋아하시나요?",
//     options: [
//       { answer: "자연 속에서 힐링하는 게 제일 좋아요", type: "relaxationSeeker" },
//       { answer: "도시의 편리함이 더 좋아요", type: "cityTraveler" },
//       { answer: "자주 가는 편이에요", type: "wanderer" },
//       { answer: "가끔 자연을 즐기는 편이에요", type: "active" },
//       { answer: "자연과는 거리가 먼 편이에요", type: "luxury" },
//     ],
//   },
//   {
//     question: "여행 중 예산 관리는 어떻게 하시나요?",
//     options: [
//       { answer: "예산을 미리 짜두고 가성비를 중시해요", type: "cheap" },
//       { answer: "재한을 두지 않고 넉넉히 써요", type: "luxury" },
//       { answer: "숙소나 맛집에 가장 많이 써요", type: "foodie" },
//       { answer: "액티비티나 활동, 체험에 많이 써요", type: "active" },
//       { answer: "예산을 유연하게 조정하며 필요에 따라 소비해요", type: "cultureLover" },
//     ],
//   },
//   {
//     question: "여행 중 로컬 음식을 즐기시나요?",
//     options: [
//       { answer: "네, 로컬 음식을 적극적으로 시도해요", type: "foodie" },
//       { answer: "아니요, 익숙한 음식을 주로 먹어요", type: "homebody" },
//       { answer: "새로운 음식을 시도하지만 낯설어요", type: "cityTraveler" },
//       { answer: "기회가 되면 새로운 음식을 시도해요", type: "cultureLover" },
//       { answer: "지역 특산물이나 재료로 직접 해먹어요", type: "cheap" },
//     ],
//   },
//   {
//     question: "여행 중 계획을 철저히 세우나요?",
//     options: [
//       { answer: "네, 계획이 있어야 안심이 돼요", type: "cityTraveler" },
//       { answer: "아니요, 즉흥적인 여행이 좋아요", type: "wanderer" },
//       { answer: "기본적인 계획만 세워요", type: "cultureLover" },
//       { answer: "필요할 때 계획을 세워요", type: "homebody" },
//       { answer: "계획을 세워도 늘 지켜지지 않아요", type: "relaxationSeeker" },
//     ],
//   },
//   {
//     question: "여행 중 편안함을 찾는 방법은 무엇인가요?",
//     options: [
//       { answer: "조용한 카페나 한적한 공원에서 여유를 즐겨요", type: "cheap" },
//       { answer: "스파나 마사지 등으로 휴식을 취해요", type: "relaxationSeeker" },
//       { answer: "액티브한 활동 후, 숙소에서 느긋하게 쉬어요", type: "homebody" },
//       { answer: "새로운 도시를 돌아다니며 느긋하게 사람들을 구경해요", type: "cultureLover" },
//       { answer: "자연 속에서 트레킹을 하거나 산책해요", type: "active" },
//     ],
//   },
//   {
//     question: "여행 중 스트레스를 어떻게 해소하나요?",
//     options: [
//       { answer: "조용한 자연 속에서 시간을 보내며 휴식해요", type: "relaxationSeeker" },
//       { answer: "활동적인 취미나 스포츠로 스트레스를 풀어요", type: "active" },
//       { answer: "숙소에서 편안하게 쉬며 룸서비스를 이용해요", type: "homebody" },
//       { answer: "쇼핑을 통해 스트레스를 해소해요", type: "luxury" },
//       { answer: "맛있는 음식을 먹으면서 스트레스를 풀어요", type: "foodie" },
//     ],
//   },
// ];

export const questions: Question[] = [
  {
    question: "여행을 준비하는 당신! 숙소를 고를 때 가장 중요한 것은?",
    options: [
      { answer: "최고급 호텔, 리조트에서 자야만 해요", type: "luxury" },
      { answer: "가성비 좋고 깔끔한 숙소를 찾아요", type: "cheap" },
      { answer: "조용하고 아늑한 숙소가 좋아요", type: "homebody" },
      { answer: "숙소는 상관없어! 잠만 자는 곳이에요", type: "wanderer" },
      { answer: "무조건 맛있는 조식이 있어야해요", type: "foodie" },
    ],
  },
  {
    question: "20년 지기 친구와 함께가는 여행! 우리의 텐션은?",
    options: [
      { answer: "여행지에서 새로운 사람을 만나요", type: "active" },
      { answer: "휴양지가서 푸욱 쉬자!", type: "relaxationSeeker" },
      { answer: "쉬는 건 사치! 할 수 있는 건 다 해요", type: "wanderer" },
      { answer: "여행지를 구경하고 현지문화를 체험하자구!", type: "cityTraveler" },
      { answer: "우리는 가성비! 저렴하게 돌아다니자~", type: "cheap" },
    ],
  },
  {
    question: "우리 여행지를 골라야해! 우리가 여행지를 고르는 기준은?",
    options: [
      { answer: "그 지역의 특별한 맛집이 있는지 봐요", type: "foodie" },
      { answer: "역사와 문화가 있는 유적지가 좋아요", type: "cultureLover" },
      { answer: "특산품, 기념품을 쇼핑하고 싶어요", type: "cityTraveler" },
      { answer: "구경할 명소가 많아야해요", type: "wanderer" },
      { answer: "자연 속에서 편하게 휴식할 수 있어야해요", type: "relaxationSeeker" },
    ],
  },
  {
    question: "우리는 여행 계획 중, 꼭 넣는 코스는?",
    options: [
      { answer: "박물관, 미술관은 필수!", type: "cultureLover" },
      { answer: "주요 도시를 돌며 삶의 모습을 구경해요.", type: "cityTraveler" },
      { answer: "산이나 해변에서 야외 액티비티를 즐겨요", type: "active" },
      { answer: "숙소 쉬는시간은 필수! 독서나 영화감상해요", type: "homebody" },
      { answer: "관광은 쇼핑이지! 쇼핑몰을 꼭 찾아가요", type: "luxury" },
    ],
  },
  {
    question: "사진 찍기를 좋아하시나요?",
    options: [
      { answer: "모든 순간을 사진으로 남길거야", type: "wanderer" },
      { answer: "기념사진은 가끔 찍지만 순간을 직접 즐겨요", type: "homebody" },
      { answer: "인스타 고고! 인물사진을 서로 찍어줘요", type: "active" },
      { answer: "멋진 건축물, 자연, 경관을 찍어요", type: "cultureLover" },
      { answer: "사진 찍는 건 별로^^..", type: "relaxationSeeker" },
    ],
  },
  {
    question: "우리 여행 중 쇼핑의 비중은?",
    options: [
      { answer: "최신 트렌드를 따르는 쇼핑을 좋아해요", type: "luxury" },
      { answer: "그 지역 먹거리를 주로 구매해요", type: "foodie" },
      { answer: "주로 여행에서 꼭 필요한 것만 사요", type: "cheap" },
      { answer: "쇼핑보다는 직접하는 문화체험이 중요해요", type: "wanderer" },
      { answer: "지역 특산품은 꼭 사와요", type: "cityTraveler" },
    ],
  },
  {
    question: "우리는 자연을 어떻게 즐길까?",
    options: [
      { answer: "자연을 바라보는 것 자체가 힐링이에요", type: "relaxationSeeker" },
      { answer: "도시의 편리함이 더 좋아요", type: "cityTraveler" },
      { answer: "자연도, 도시도 어디든 많이 가요", type: "wanderer" },
      { answer: "패러글라이딩, 보트타기 등 스릴을 좋아해요", type: "active" },
      { answer: "자연은 싫어.. 힘들고 별로에요..", type: "luxury" },
    ],
  },
  {
    question: "여행 중 경비는 어떻게 쓸까?",
    options: [
      { answer: "예산을 계획적으로 짜고, 가성비가 중요해요", type: "cheap" },
      { answer: "제한을 두지 않고 넉넉히 쓰자구!", type: "luxury" },
      { answer: "숙소나 맛집에 가장 많이 써요", type: "foodie" },
      { answer: "액티비티나 활동, 체험에 많이 써요", type: "active" },
      { answer: "예산을 유연하게, 필요에 따라 소비해요", type: "cultureLover" },
    ],
  },
  {
    question: "우리는 미식가! 여행 중 로컬 음식을 시도해볼까?",
    options: [
      { answer: "좋아! 여러가지 로컬음식 도전하는 걸 즐겨요", type: "foodie" },
      { answer: "아니요, 익숙한 음식을 먹어요", type: "homebody" },
      { answer: "시도는 하지만 낯선 음식은 자신 없어요", type: "cityTraveler" },
      { answer: "음식은 곧 문화! 유명한 음식은 꼭 먹어요", type: "cultureLover" },
      { answer: "돈 아끼자! 지역 특산물로 직접 해먹어요", type: "cheap" },
    ],
  },
  {
    question: "우리는 J일까? P일까? 여행 중 계획을 철저히 세우나요?",
    options: [
      { answer: "그럼요, 계획이 있어야 안심이 돼요", type: "cityTraveler" },
      { answer: "아니요, 즉흥적인 여행이 좋아요", type: "wanderer" },
      { answer: "기본적인 계획만 세워요", type: "cultureLover" },
      { answer: "필요할 때 계획을 세워요", type: "homebody" },
      { answer: "계획을 세워도 늘 지켜지지 않아요", type: "relaxationSeeker" },
    ],
  },
  {
    question: "여행도 쉬어가야지.. 우리가 편안함을 찾는 방법은?",
    options: [
      { answer: "조용한 카페나 공원에서 여유를 즐겨요", type: "cheap" },
      { answer: "스파나 마사지 등으로 휴식을 취해요", type: "relaxationSeeker" },
      { answer: "액티브한 활동 후, 숙소에서 느긋하게 쉬어요", type: "homebody" },
      { answer: "새로운 도시를 다니며 사람들을 구경해요", type: "cultureLover" },
      { answer: "자연 속에서 트레킹을 하거나 움직여야해요", type: "active" },
    ],
  },
  {
    question: "여행 중 스트레스를 받으면?",
    options: [
      { answer: "아무도 없는 조용한 자연에서 힐링하기", type: "relaxationSeeker" },
      { answer: "활동적인 취미나 스포츠로 스트레스 풀기", type: "active" },
      { answer: "숙소에서 쉬며 룸서비스 이용하기", type: "homebody" },
      { answer: "맘껏 쇼핑하면서 스트레스 풀기", type: "luxury" },
      { answer: "맛있는 음식 먹으며 힐링하기", type: "foodie" },
    ],
  },
];
