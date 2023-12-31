import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  constructor() {}

  jsonData = [
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'China suspends seafood imports from two Russian vessels for a month',
      content: '',
      description:
        'China will stop accepting import declarations from two Russian vessels for four weeks, after the coronavirus was detected on the outer packaging and samples of Russian aquatic products.',
      url: 'https://www.reuters.com/article/us-health-coronavirus-china-food/china-suspends-seafood-imports-from-two-russian-vessels-for-a-month-idUSKCN26H04J',
      imageUrl: '',
      publishedAt: '2020-09-26T02:51:11Z',
      id: 'a31d01e981937d05268caea0f6cc1d5a',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'Trump says U.S. election winner might not be known for months',
      content: '',
      description:
        'U.S. President Donald Trump said on Friday that Americans might not know the winner of the November presidential election for months due to disputes over mail ballots, building on his criticism of a method that could be used by half of U.S. voters this year.',
      url: 'https://www.reuters.com/article/us-usa-election-trump/trump-says-u-s-election-winner-might-not-be-known-for-months-idUSKCN26H03P',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200926&t=2&i=1534987112&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8P027',
      publishedAt: '2020-09-26T02:33:05Z',
      id: '4c31a184090018464211d65309249b8d',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'South Korea asks North Korea to probe shooting death of South Korean official',
      content: '',
      description:
        'South Korea said on Saturday it will ask North Korea to further investigate the shooting death of a South Korean official, as public and political outrage over the killing grew.',
      url: 'https://www.reuters.com/article/us-northkorea-southkorea-shooting/south-korea-asks-north-korea-to-probe-shooting-death-of-south-korean-official-idUSKCN26H02A',
      imageUrl: '',
      publishedAt: '2020-09-26T01:52:27Z',
      id: '92d4808a899216a69221b835fe585559',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['XPEV'],
      markets: [],
      title: 'EV maker Xpeng, its CEO invest in air taxi startup',
      content: '',
      description:
        'Chinese electric vehicle (EV) maker Xpeng Inc said on Saturday that along with its CEO, He Xiaopeng, it has invested in air taxi startup Xpeng Heitech, as the global auto industry explores future mobility.',
      url: 'https://www.reuters.com/article/us-xpeng-electric/ev-maker-xpeng-its-ceo-invest-in-air-taxi-startup-idUSKCN26H020',
      imageUrl:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20200926&t=2&i=1534984315&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8P00Y',
      publishedAt: '2020-09-26T01:45:01Z',
      meta: {
        postOnTarget1: false,
      },
      id: '7d8d3ac78244e13df8226af01780bbfb',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'cnbc',
        name: 'CNBC',
      },
      categories: [],
      symbols: ['FWONA'],
      markets: [],
      title:
        'New F1 CEO will need to address future of U.S. Grand Prix in Austin as racetrack deal set to expire after 2021 season',
      content: '',
      description:
        'The Liberty Media-owned racing property replaced CEO Chase Carey raising questions around its U.S. expansion, starting with its future in Austin.',
      url: 'https://www.cnbc.com/2020/09/25/new-f1-ceo-will-need-to-address-future-of-us-grand-prix-in-austin.html',
      imageUrl:
        'https://image.cnbcfm.com/api/v1/image/105848718-1555072501453gettyimages-993973576.jpg?v=1555072555',
      publishedAt: '2020-09-26T01:30:21+0000',
      id: 'ed7dbd46551ee5e8dcb725afcd0306d1',
      industries: ['Broadcasting - TV'],
      sectors: ['Consumer Cyclical'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'Trump extends drilling ban off North Carolina, Virginia',
      content: '',
      description:
        'U.S. President Donald Trump said on Friday he had extended a ban until 2032 on oil drilling off the coast of North Carolina and Virginia, weeks after a similar extension affecting offshore drilling in the waters off Florida, Georgia and South Carolina.',
      url: 'https://www.reuters.com/article/us-usa-offshore-drilling-north-carolina/trump-extends-drilling-ban-off-north-carolina-virginia-idUSKCN26H015',
      imageUrl:
        'https://s2.reutersmedia.net/resources/r/?m=02&d=20200926&t=2&i=1534981922&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8P00F',
      publishedAt: '2020-09-26T00:58:17Z',
      id: '71e3a4b8741ddb2780494c5dc5e3d641',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: "Biden accuses Trump of silence on 'dictator' in Belarus",
      content: '',
      description:
        'Democratic presidential nominee Joe Biden on Friday chided President Donald Trump for not speaking out about repression of democratic protests in Belarus, a country he said is being run by a "dictator."',
      url: 'https://www.reuters.com/article/us-belarus-election-usa-biden/biden-accuses-trump-of-silence-on-dictator-in-belarus-idUSKCN26H00Z',
      imageUrl:
        'https://s2.reutersmedia.net/resources/r/?m=02&d=20200926&t=2&i=1534980918&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8P00D',
      publishedAt: '2020-09-26T00:46:24Z',
      id: 'e8ee94dc90e09c76be734b059577fbb3',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['DB'],
      markets: [],
      title: 'Two ex-Deutsche Bank traders convicted in U.S. over fake orders',
      content: '',
      description:
        'Two former Deutsche Bank AG traders were found guilty on Friday by a federal jury in Chicago of placing fraudulent "spoof" orders for precious metals futures contracts, the Justice Department said.',
      url: 'https://www.reuters.com/article/us-deutsche-bank-traders-convicted/two-ex-deutsche-bank-traders-convicted-in-u-s-over-fake-orders-idUSKCN26H00X',
      imageUrl: '',
      publishedAt: '2020-09-26T00:36:06Z',
      meta: {
        postOnTarget1: false,
      },
      id: 'c5a75cd7a99073f57bfec3438c5ed986',
      industries: ['Banks - Regional - Europe'],
      sectors: ['Financial Services'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['U'],
      markets: [],
      title: 'Australia says world needs to know origins of COVID-19',
      content: '',
      description:
        "The world's nations must do all they can to understand the origins of COVID-19, Australia's Prime Minister Scott Morrison said on Saturday, comments that could worsen tensions with China.",
      url: 'https://www.reuters.com/article/us-health-coronavirus-australia-china/australia-says-world-needs-to-know-origins-of-covid-19-idUSKCN26H00T',
      imageUrl:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20200926&t=2&i=1534980147&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8P009',
      publishedAt: '2020-09-26T00:30:16Z',
      id: '88c68b7c9c6002620cc382197347f2f6',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Trump Supreme Court pick Barrett known for conservative religious views',
      content: '',
      description:
        'In planning to nominate Amy Coney Barrett for the U.S. Supreme Court, President Donald Trump has selected a federal appeals court judge who has staked out conservative legal positions on key hot-button issues in three years on the bench.',
      url: 'https://www.reuters.com/article/us-usa-court-barrett-profile-newsmaker/trump-supreme-court-pick-barrett-known-for-conservative-religious-views-idUSKCN26H001',
      imageUrl:
        'https://s1.reutersmedia.net/resources/r/?m=02&d=20200926&t=2&i=1534979001&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8P001',
      publishedAt: '2020-09-26T00:10:35Z',
      id: '467f0fcc343a498bd9071bd0eac193b9',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Peru to further open economy in October as coronavirus cases drop',
      content: '',
      description:
        'Peru will push forward with a gradual reopening of its economy in October, allowing international flights to countries in the region and more people into its restaurants and stores, the government said on Friday, provided coronavirus cases continue to fall.',
      url: 'https://www.reuters.com/article/us-health-coronavirus-peru/peru-to-further-open-economy-in-october-as-coronavirus-cases-drop-idUSKCN26G397',
      imageUrl:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534977373&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O238',
      publishedAt: '2020-09-25T23:36:10Z',
      id: '553d30f4c0e4fff348c5c68004300472',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Instant View: Reaction to Trump plan to pick Amy Coney Barrett for Supreme Court',
      content: '',
      description:
        'President Donald Trump on Saturday will name conservative federal appeals court judge Amy Coney Barrett to fill the vacancy on the U.S. Supreme Court following the death of Justice Ruth Bader Ginsburg, two sources said on Friday.',
      url: 'https://www.reuters.com/article/us-usa-court-ginsburg-barrett-instantvie/instant-view-reaction-to-trump-plan-to-pick-amy-coney-barrett-for-supreme-court-idUSKCN26G395',
      imageUrl: '',
      publishedAt: '2020-09-25T23:31:24Z',
      id: '546ed77f70769d347247a284bc0cd1c0',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'Nigerian air travel could shut as unions pledge to join strike',
      content: '',
      description:
        "Nigeria's airports could shut down on Monday as four key unions said they would join an indefinite nationwide strike to protest an increase in power and petrol prices.",
      url: 'https://www.reuters.com/article/us-health-coronavirus-nigeria-strike/nigerian-air-travel-could-shut-as-unions-pledge-to-join-strike-idUSKCN26G38X',
      imageUrl:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534976675&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O22Z',
      publishedAt: '2020-09-25T23:16:13Z',
      id: 'aeb28a39bc4c8cec94ca91c5453533c0',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'cnbc',
        name: 'CNBC',
      },
      categories: [],
      symbols: ['COST', 'AMZN'],
      markets: [],
      title:
        "Jim Cramer says to buy Costco's stock after its 'absurd' post-earnings decline",
      content: '',
      description:
        "CNBC's Jim Cramer pushed back against Wall Street's concerns about Costco, saying investors should buy the stock after its post-earnings decline. ",
      url: 'https://www.cnbc.com/2020/09/25/jim-cramer-buy-costcos-stock-after-its-absurd-post-earnings-dip.html',
      imageUrl:
        'https://image.cnbcfm.com/api/v1/image/106658983-1597172053278-gettyimages-1264144832-l1003432.jpeg?v=1597172112',
      publishedAt: '2020-09-25T23:05:16+0000',
      id: '872c6e2222d2b6dc9e57e7dce89c9497',
      industries: ['Discount Stores', 'Specialty Retail'],
      sectors: ['Consumer Defensive', 'Consumer Cyclical'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['TSLA', 'NIO', 'XPEV'],
      markets: [],
      title: 'Beijing autoshow: Demand rebound, EV boom mix with murky outlook',
      content: '',
      description:
        "China's auto market has rebounded smartly from the COVID-19 crash in recent months, especially for high-end cars, but questions about the durability of that recovery will hang over the Beijing autoshow, starting on Saturday.",
      url: 'https://www.reuters.com/article/autos-china-demand/beijing-autoshow-demand-rebound-ev-boom-mix-with-murky-outlook-idUSL3N2GJ2RU',
      imageUrl: '',
      publishedAt: '2020-09-25T23:00:36Z',
      meta: {
        postOnTarget1: false,
      },
      id: '9b01713ed75fbbeb782171c07d06e564',
      industries: ['Auto Manufacturers'],
      sectors: ['Consumer Cyclical'],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: ['TSLA', 'GM'],
      markets: [],
      title: 'Tesla’s Nemesis in China Is a Tiny $5,000 Electric Car From GM',
      content: '',
      description:
        'Known globally for its trucks and muscle cars, General Motors Co. has scored a surprise hit in China with its local partners: a petite electric vehicle that sells for less than $5,000.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/tesla-s-nemesis-in-china-is-a-tiny-5-000-electric-car-from-gm',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iI1roLxed7RE/v0/-1x-1.jpg',
      publishedAt: '2020-09-25T23:00:00.000Z',
      id: '12f3c7478a1129bc494b031462574da8',
      industries: ['Auto Manufacturers'],
      sectors: ['Consumer Cyclical'],
    },
    {
      source: {
        id: 'cnbc',
        name: 'CNBC',
      },
      categories: [],
      symbols: [
        'BA',
        'AAL',
        'GE',
        'RDHL-IL',
        'RPRX',
        'WBA',
        'AMZN',
        'ILMN',
        'TMO',
        'DHR',
        'PING',
      ],
      markets: [],
      title: "Cramer's lightning round: 'I think you're right to own Boeing'",
      content: '',
      description:
        '"Mad Money" host Jim Cramer rings the lightning round bell, which means he\'s giving his answers to callers\' stock questions at rapid speed.',
      url: 'https://www.cnbc.com/2020/09/25/cramers-lightning-round-you-can-buy-boeing-avoid-walgreens.html',
      imageUrl:
        'https://image.cnbcfm.com/api/v1/image/103507383-Lightning-Round.jpg?v=1459356509',
      publishedAt: '2020-09-25T22:56:30+0000',
      id: '70813eb36aef7657fe244d201f860d17',
      industries: [
        'Aerospace & Defense',
        'Airlines',
        'Diversified Industrials',
        'Pharmaceutical Retailers',
        'Specialty Retail',
        'Diagnostics & Research',
      ],
      sectors: [
        'Industrials',
        'Consumer Defensive',
        'Consumer Cyclical',
        'Healthcare',
      ],
    },
    {
      source: {
        id: 'cnbc',
        name: 'CNBC',
      },
      categories: [],
      symbols: ['FB', 'SNOW'],
      markets: [],
      title:
        "Cramer recommends Palantir at the right price, but says its governance is most 'egregious' since WeWork",
      content: '',
      description:
        '"If you can get Palantir for around $10, or ideally less on a pullback, you\'ve got my blessing to buy it," said "Mad Money" host Jim Cramer.',
      url: 'https://www.cnbc.com/2020/09/25/jim-cramer-palantir-is-a-buy-at-right-price-ahead-of-direct-listing.html',
      imageUrl:
        'https://image.cnbcfm.com/api/v1/image/104169213-RTX2V2WZ.jpg?v=1601073295',
      publishedAt: '2020-09-25T22:48:06+0000',
      id: '34a78bcec2fc27d91501805fd249d9a9',
      industries: ['Internet Content & Information'],
      sectors: ['Technology'],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'Used-Clothing Platform Poshmark Says It Filed to Go Public',
      content: '',
      description:
        'Poshmark Inc., an online resale marketplace for second-hand clothing, said it has filed confidentially for an initial public offering.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/used-clothing-platform-poshmark-says-it-filed-to-go-public',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/istmTSXKQ93o/v0/-1x-1.jpg',
      publishedAt: '2020-09-25T22:45:17.634Z',
      id: '6b17a4471e4e3f9da9c61fa0e021e05a',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['U'],
      markets: [],
      title: "Togo's prime minister and government resign, presidency says",
      content: '',
      description:
        'Togolese Prime Minister Komi Selom Klassou and his government tendered their resignation on Friday, the presidency said in a statement, congratulating the Cabinet for its work in office.',
      url: 'https://www.reuters.com/article/us-togo-politics/togos-prime-minister-and-government-resign-presidency-says-idUSKCN26G384',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534974704&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O22P',
      publishedAt: '2020-09-25T22:44:09Z',
      id: '7a111ea70a821476d70683b71e3f0432',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'USDA funds $1 million research project studying COVID-19 in U.S. beef supply chain',
      content: '',
      description:
        "The U.S. Department of Agriculture is funding a $1 million research project to identify how the virus that causes COVID-19 might be transmitted in the nation's beef supply chain, from cattle on the farm to the packages of meat inside a person's refrigerator.",
      url: 'https://www.reuters.com/article/us-health-coronavirus-usa-food/usda-funds-1-million-research-project-studying-covid-19-in-u-s-beef-supply-chain-idUSKCN26G37W',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534974431&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O22O',
      publishedAt: '2020-09-25T22:40:38Z',
      id: '6ef55310724024e05da168edc0c10a8b',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        "Notable legal opinions of Trump's planned U.S. Supreme Court pick Barrett",
      content: '',
      description:
        'Amy Coney Barrett, who President Donald Trump plans to pick for a lifetime job on the U.S. Supreme Court, has served as a federal appeals court judge since 2017 and has weighed in on cases involving several hot-button issues including abortion, gun rights, immigration and campus sexual assault.',
      url: 'https://www.reuters.com/article/us-usa-court-barrett-rulings-factbox/notable-legal-opinions-of-trumps-planned-u-s-supreme-court-pick-barrett-idUSKCN26G37S',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534976349&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O22L',
      publishedAt: '2020-09-25T22:32:07Z',
      id: 'ab647e565ad54dc2a913963707094b72',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'Ray Dalio Sees Enemy Within as He Ponders U.S.-China Clash',
      content: '',
      description:
        'Ray Dalio used the latest installment of his ongoing series on the changing world order to identify clear red lines that, if crossed, could result in a deadly war between China and the U.S., but the real enemy in the conflict may lie within.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/ray-dalio-sees-enemy-within-as-he-ponders-u-s-china-clash',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iXtq1IeKSmrY/v1/-1x-1.jpg',
      publishedAt: '2020-09-25T22:31:24.699Z',
      id: '3a7962724f6b6f703e41f88f39205843',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Rise in virus cases adds to economic uncertainty ahead of U.S. election',
      content: '',
      description:
        'With COVID-19 deaths in the U.S. topping 200,000 this week following a rise in new daily cases last week for the first time in eight weeks, the role of the economy in the looming presidential election could take on heightened importance -- but it is not clear how.',
      url: 'https://www.reuters.com/article/us-usa-election-economy/rise-in-virus-cases-adds-to-economic-uncertainty-ahead-of-u-s-election-idUSKCN26G37M',
      imageUrl:
        'https://s2.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534973004&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O22F',
      publishedAt: '2020-09-25T22:20:54Z',
      id: 'a98b8c0c8b32899a7c36c9c82180437d',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'N.Y.C. Wary of Local Spike While Florida Reopens: Virus Update',
      content: '',
      description:
        'New York City officials voiced concern about rising Covid-19 infections in Orthodox Jewish neighborhoods, while Florida lifted capacity restrictions on restaurants. U.S. cases breached 7 million.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/n-y-c-wary-of-local-spike-while-florida-reopens-virus-update',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJfwgSic9Wnw/v0/-1x-1.png',
      publishedAt: '2020-09-25T22:07:08.783Z',
      id: '0f477f60112a6704aa33187d8bc42592',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['DAL'],
      markets: [],
      title:
        'Delta Air Lines expects charges of up to $2.5 billion in third quarter',
      content: '',
      description:
        'Delta Air Lines said on Friday it is bringing forward a series of aircraft retirements, leading to a charge of up to $2.5 billion in the third quarter.',
      url: 'https://www.reuters.com/article/us-delta-air-outlook/delta-air-lines-expects-charges-of-up-to-2-5-billion-in-third-quarter-idUSKCN26G35Z',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534969834&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O21L',
      publishedAt: '2020-09-25T21:36:09Z',
      id: 'cff5876a9588e37d021802a980aaae0a',
      industries: ['Airlines'],
      sectors: ['Industrials'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['U'],
      markets: [],
      title:
        "UK pledges over $400 million for WHO, calls for end to 'ugly rifts'",
      content: '',
      description:
        'British Prime Minister Boris Johnson will pledge on Saturday a 30% increase in funding for the World Health Organization while urging reforms to the global health body and calling for a revival of cross-border cooperation to end "ugly rifts".',
      url: 'https://www.reuters.com/article/us-health-coronavirus-un-britain/uk-pledges-over-400-million-for-who-calls-for-end-to-ugly-rifts-idUSKCN26G35U',
      imageUrl:
        'https://s2.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534969561&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O21H',
      publishedAt: '2020-09-25T21:33:56Z',
      id: 'f8f3a72c16dffe5a4c089878f54e15df',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: ['EBAY', 'SMRTQ', 'ARES'],
      markets: [],
      title: 'Neiman Leaves Bankruptcy With Less Debt to Face Retail’s Turmoil',
      content: '',
      description:
        'Neiman Marcus has officially come out of bankruptcy, a process that left the upscale department store with a lighter debt load and new owners to confront the same industry trends that led to its financial woes.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/neiman-leaves-bankruptcy-with-less-debt-to-face-retail-s-turmoil',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWKFlrW85gNs/v0/-1x-1.jpg',
      publishedAt: '2020-09-25T21:28:43.800Z',
      id: '65be5293d0ad9a092ceb2ae09ab21e3f',
      industries: ['Specialty Retail', 'Asset Management'],
      sectors: ['Consumer Cyclical', 'Financial Services'],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'Ex-Deutsche Bank Gold Traders Found Guilty in Spoofing Trial',
      content: '',
      description:
        'Federal prosecutors behind a sweeping crackdown on market “spoofing” scored a big win Friday after a Chicago jury convicted former Deutsche Bank AG traders Cedric Chanu and James Vorley of fraud for manipulating gold and silver prices.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/ex-deutsche-bank-gold-traders-found-guilty-in-spoofing-trial',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ifRIUvdV2sDo/v0/-1x-1.jpg',
      publishedAt: '2020-09-25T21:27:53.553Z',
      id: '8d8dd5b74d57dfc6ba7e1b9e93d73d54',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: ['UAL', 'LUV', 'AAL', 'DAL'],
      markets: [],
      title: 'American Air Gets $5.48 Billion U.S. Loan in Upsized Deal',
      content: '',
      description:
        'American Airlines Group Inc. closed a $5.48 billion loan with the U.S. Treasury, increasing its pool of cash to help fund operations until travel demand begins to return.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/american-airlines-gets-5-48-billion-u-s-loan-in-upsized-deal',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iv85OM_OA.kM/v0/-1x-1.jpg',
      publishedAt: '2020-09-25T21:18:52.917Z',
      id: 'a9cd1940655086d1c962ebb89e16f128',
      industries: ['Airlines'],
      sectors: ['Industrials'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['TWTR'],
      markets: [],
      title:
        'Transgender woman killed at army checkpoint in Colombia, prompting outrage',
      content: '',
      description:
        'A soldier shot and killed a transgender woman at a military checkpoint in southwestern Colombia, prompting outrage from activists and condemnation from politicians.',
      url: 'https://www.reuters.com/article/us-colombia-violence/transgender-woman-killed-at-army-checkpoint-in-colombia-prompting-outrage-idUSKCN26G34X',
      imageUrl: '',
      publishedAt: '2020-09-25T21:11:54Z',
      meta: {
        postOnTarget1: false,
      },
      id: '20224da10c8b21841f9c9b8b73923346',
      industries: ['Internet Content & Information'],
      sectors: ['Technology'],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'Startup Hims Nears a Deal to Go Public Via Oaktree SPAC',
      content: '',
      description:
        'Silicon Valley telemedicine company Hims Inc., which gained popularity selling erectile dysfunction and hair loss treatments online, is nearing a deal to go public through a merger with blank-check company Oaktree Acquisition Corp., according to people with knowledge of the matter.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/startup-hims-is-said-to-near-deal-to-go-public-via-oaktree-spac',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHUaE3iIY.3E/v1/-1x-1.jpg',
      publishedAt: '2020-09-25T20:57:01.333Z',
      id: '7fbfb539117a2e2bd6ffefd19fe18480',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['TWTR'],
      markets: [],
      title:
        'Chinese fishing fleet off Peru stirs up diplomatic waters as navy monitors',
      content: '',
      description:
        "Peru's Navy on Friday was carefully watching a fleet of around 250 Chinese fishing vessels that had sailed just outside the Andean country's waters, angering the domestic fishing industry and sparking a Twitter war between Washington and Beijing.",
      url: 'https://www.reuters.com/article/us-peru-fishing-china/chinese-fishing-fleet-off-peru-stirs-up-diplomatic-waters-as-navy-monitors-idUSKCN26G33K',
      imageUrl: '',
      publishedAt: '2020-09-25T20:53:53Z',
      meta: {
        postOnTarget1: false,
      },
      id: '3ad2678ab4c7462fa80a745d62c7e10e',
      industries: ['Internet Content & Information'],
      sectors: ['Technology'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['U'],
      markets: [],
      title:
        "Ethiopia tells U.N. 'no intention' of using dam to harm Egypt, Sudan",
      content: '',
      description:
        'Ethiopian Prime Minister Abiy Ahmed told the United Nations on Friday that his country has "no intention" of harming Sudan and Egypt with a giant hydropower dam on the Blue Nile that has caused a bitter water dispute between the three countries.',
      url: 'https://www.reuters.com/article/us-un-assembly-ethiopia/ethiopia-tells-u-n-no-intention-of-using-dam-to-harm-egypt-sudan-idUSKCN26G337',
      imageUrl:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534965625&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1ZX',
      publishedAt: '2020-09-25T20:49:53Z',
      id: 'd50b34d6addb52c7ae8e6736c9da1b32',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title: 'U.S., UK sign agreement on artificial intelligence',
      content: '',
      description:
        'The Trump administration announced on Friday that the United States and the United Kingdom had signed a new agreement to cooperate on research and development of artificial intelligence.',
      url: 'https://www.reuters.com/article/us-usa-britain-ai/u-s-uk-sign-agreement-on-artificial-intelligence-idUSKCN26G339',
      imageUrl: '',
      publishedAt: '2020-09-25T20:49:43Z',
      id: '5cb4b7fff0e3f8bbc0d7806ae888a006',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        "Pelosi, Mnuchin discuss COVID aid, agree to more talks : Pelosi's office",
      content: '',
      description:
        "U.S. House of Representatives Speaker Nancy Pelosi spoke with Treasury Secretary Steven Mnuchin about coronavirus relief on Friday and they agreed to hold more talks, Pelosi's office said.",
      url: 'https://www.reuters.com/article/us-health-coronavirus-usa-pelosi/pelosi-mnuchin-discuss-covid-aid-agree-to-more-talks-pelosis-office-idUSKCN26G330',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534965389&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1ZL',
      publishedAt: '2020-09-25T20:45:49Z',
      id: '73c1010100defbf8cf02dd5f7513fb23',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'cnbc',
        name: 'CNBC',
      },
      categories: [],
      symbols: ['GOOGL'],
      markets: [],
      title:
        "Google CEO Sundar Pichai tells employees 'we are not going back in time' after sexual misconduct settlement",
      content: '',
      description:
        'Alphabet and Google CEO Sundar Pichai sent a stern note to employees following its massive settlement on sexual misconduct allegations.',
      url: 'https://www.cnbc.com/2020/09/25/read-google-ceo-sundar-pichais-email-after-misconduct-settlement.html',
      imageUrl:
        'https://image.cnbcfm.com/api/v1/image/106479087-1588160623981preview.jpg?v=1595350043',
      publishedAt: '2020-09-25T20:45:30+0000',
      id: 'fcfa9ddf5986ff9c0623dc2b6f969b79',
      industries: ['Internet Content & Information'],
      sectors: ['Technology'],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: [
        'GS',
        'NDAQ',
        'MS',
        'FB',
        'UBER',
        'WORK',
        'ASAN',
        'PLTR',
        'SPOT',
      ],
      markets: [],
      title: 'One Pandemic Later, Direct Listings See Some Blue Sky: QuickTake',
      content: '',
      description:
        'Hot technology startups have traditionally raised the cash they needed to break into the big time through initial public offerings. IPOs became synonymous with instant wealth for company founders and those lucky enough to buy those shiny new shares. Then music-streaming service Spotify Technology SA went a different route, going public through a method called direct listing. Why a direct listing? While Spotify didn’t need new cash, its investors wanted to cash out. Workplace messaging platform S',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/one-pandemic-later-direct-listings-see-some-blue-sky-quicktake',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ik8KmSbrlvjE/v0/-1x-1.jpg',
      publishedAt: '2020-09-25T20:43:50.875Z',
      id: '3b192301cbab61e2ce6dc1b258087f51',
      industries: [
        'Capital Markets',
        'Financial Exchanges',
        'Internet Content & Information',
        'Software - Application',
      ],
      sectors: ['Financial Services', 'Technology'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'U.S. housing head Carson notes suggest friction with Trump aide tasked with ensuring loyalty',
      content: '',
      description:
        'Housing and Urban Development Secretary Ben Carson scripted a complaint to President Donald Trump about how the presidential personnel office is handling his agency, notes seen by reporters on Friday show.',
      url: 'https://www.reuters.com/article/us-usa-trump-carson/u-s-housing-head-carson-notes-suggest-friction-with-trump-aide-tasked-with-ensuring-loyalty-idUSKCN26G32Q',
      imageUrl:
        'https://s2.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534964682&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1ZH',
      publishedAt: '2020-09-25T20:39:41Z',
      id: 'd2ac1aaeeb2c8bbc1200586691a240ea',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: ['WKHS'],
      markets: [],
      title: 'Hedge Fund Bets on Lithium Miner After Big Electric Vehicle Win',
      content: '',
      description:
        'Formidable Asset Management LLC, a hedge fund that bet on electric-vehicle maker Workhorse Group Inc., and battery maker Nano One Materials Corp. is now putting its money on a lithium mining company.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/hedge-fund-bets-on-lithium-miner-after-big-electric-vehicle-win',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iUgQPQ_Y9LyY/v1/-1x-1.jpg',
      publishedAt: '2020-09-25T20:33:17.775Z',
      id: '97b430deb17b0a6e2d44b312e9a0a739',
      industries: ['Auto Parts'],
      sectors: ['Consumer Cyclical'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['NYT'],
      markets: [],
      title:
        'Trump pledges to make Juneteenth federal holiday in bid for Black voters',
      content: '',
      description:
        'President Donald Trump made a series of promises at a campaign event in Atlanta on Friday in a bid to woo Black voters, including establishing Juneteenth, which commemorates the end of U.S. slavery, as a federal holiday.',
      url: 'https://www.reuters.com/article/us-usa-election-trump-juneteenth/trump-pledges-to-make-juneteenth-federal-holiday-in-bid-for-black-voters-idUSKCN26G326',
      imageUrl:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534963933&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1YS',
      publishedAt: '2020-09-25T20:31:46Z',
      meta: {
        postOnTarget1: false,
      },
      id: '9b80c28490dcfd47002dbc97aedee991',
      industries: ['Publishing'],
      sectors: ['Consumer Cyclical'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Quebec province reports C$4.9 bln deficit for Q1 2020-21 due to COVID-19',
      content: '',
      description:
        'The Canadian province of Quebec on Friday reported a C$4.9 billion ($3.7 billion) budgetary deficit for the first three months of fiscal 2020-21, following higher spending and an economic slowdown due to COVID-19.',
      url: 'https://www.reuters.com/article/canada-quebec-budget/quebec-province-reports-c4-9-bln-deficit-for-q1-2020-21-due-to-covid-19-idUSL2N2GM1R4',
      imageUrl: '',
      publishedAt: '2020-09-25T20:29:57Z',
      id: '81c6a272caea86d3d0f4e588979a8db2',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Brazil Supreme Court Justice de Mello to step down three weeks early',
      content: '',
      description:
        "Brazilian Supreme Court Justice Celso de Mello will retire early on October 13, the court's press office said on Friday, allowing for right-wing President Jair Bolsonaro to make his first pick for the country's top court.",
      url: 'https://www.reuters.com/article/us-brazil-politics-court/brazil-supreme-court-justice-de-mello-to-step-down-three-weeks-early-idUSKCN26G320',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534963356&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1YP',
      publishedAt: '2020-09-25T20:23:51Z',
      id: '10473c3476e361f6da289e3e151131d0',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        "Poland's president says migrants should stay close to their countries",
      content: '',
      description:
        "Migrants fleeing conflict should stay as close as possible to their home countries, Poland's president said on Friday, criticising proposals for an overhaul of the European Union's migration and asylum rules.",
      url: 'https://www.reuters.com/article/us-europe-migrants-poland/polands-president-says-migrants-should-stay-close-to-their-countries-idUSKCN26G31S',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534963185&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1YL',
      publishedAt: '2020-09-25T20:21:49Z',
      id: '823f2aa2ac02378dcdcb4ac4b1bfc13b',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      categories: [],
      symbols: ['BAC', 'GS', 'AMZN', 'AAPL', 'TSLA', 'JPM'],
      markets: [],
      title: 'S&P 500’s Fourth Week of Losses Sounds Alarm on Economic Growth',
      content: '',
      description:
        'The September stock-market selloff that started as comeuppance for overheated tech shares evolved this week into a more troubling sign for the U.S. economy.',
      url: 'https://www.bloomberg.com/news/articles/2020-09-25/s-p-500-s-fourth-week-of-losses-sounds-alarm-on-economic-growth',
      imageUrl:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iqeXWFvm1hpE/v2/-1x-1.png',
      publishedAt: '2020-09-25T20:20:26.477Z',
      id: '6e088fe7ea01329311ea97be60a8fab9',
      industries: [
        'Banks - Global',
        'Capital Markets',
        'Specialty Retail',
        'Consumer Electronics',
        'Auto Manufacturers',
      ],
      sectors: ['Financial Services', 'Consumer Cyclical', 'Technology'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Trump intends to nominate Judge Amy Coney Barrett to Supreme Court, CNN reports',
      content: '',
      description:
        'President Donald Trump intends to nominate conservative federal appeals court judge Amy Coney Barrett to fill the vacancy on the U.S. Supreme Court following the death of Justice Ruth Bader Ginsburg, CNN reported on Friday, citing Republican sources.',
      url: 'https://www.reuters.com/article/us-usa-court-ginsburg-barrett/trump-intends-to-nominate-judge-amy-coney-barrett-to-supreme-court-cnn-reports-idUSKCN26G31M',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534962808&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1YJ',
      publishedAt: '2020-09-25T20:18:41Z',
      id: '7f4811debf6e11f8bc4e0a0659a2308f',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['NYT'],
      markets: [],
      title:
        'Trump plans to pick Judge Amy Coney Barrett for Supreme Court, media reports say',
      content: '',
      description:
        'President Donald Trump intends to nominate conservative federal appeals court judge Amy Coney Barrett to fill the vacancy on the U.S. Supreme Court following the death of Justice Ruth Bader Ginsburg, U.S. media reported on Friday, citing Republican sources.',
      url: 'https://www.reuters.com/article/us-usa-court-ginsburg-barrett/trump-plans-to-pick-judge-amy-coney-barrett-for-supreme-court-media-reports-say-idUSKCN26G31M',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534962808&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1YJ',
      publishedAt: '2020-09-25T20:18:41Z',
      meta: {
        postOnTarget1: false,
      },
      id: 'a0eb8fd715cb95f77df04b43351e8015',
      industries: ['Publishing'],
      sectors: ['Consumer Cyclical'],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: [],
      markets: [],
      title:
        'Trump to nominate conservative judge Amy Coney Barrett to succeed Ginsburg, sources say',
      content: '',
      description:
        'President Donald Trump plans on Saturday to name conservative federal appeals court judge Amy Coney Barrett to fill the vacancy on the U.S. Supreme Court created by the death of Justice Ruth Bader Ginsburg, two sources said on Friday.',
      url: 'https://www.reuters.com/article/us-usa-court-ginsburg-barrett/trump-to-nominate-conservative-judge-amy-coney-barrett-to-succeed-ginsburg-sources-say-idUSKCN26G31M',
      imageUrl:
        'https://s3.reutersmedia.net/resources/r/?m=02&d=20200925&t=2&i=1534972792&&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG8O1YJ',
      publishedAt: '2020-09-25T20:18:41Z',
      id: '7b9642cbd4746bc24006b5f22e7f3517',
      industries: [],
      sectors: [],
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      categories: [],
      symbols: ['TSLA', 'F', 'HD', 'RL', 'SYY', 'ELY'],
      markets: [],
      title: 'Some 3,500 U.S. companies sue over Trump-imposed Chinese tariffs',
      content: '',
      description:
        'About 3,500 U.S. companies, including Tesla Inc, Ford Motor Co, Target Corp , Walgreen Co and Home Depot have sued the Trump administration in the last two weeks over the imposition of tariffs on more than $300 billion in Chinese-made goods.',
      url: 'https://www.reuters.com/article/usa-china-tariffs/some-3500-u-s-companies-sue-over-trump-imposed-chinese-tariffs-idUSL2N2GM166',
      imageUrl: '',
      publishedAt: '2020-09-25T20:09:46Z',
      meta: {
        postOnTarget1: false,
      },
      id: '2d088cb4b696d3ba4bb98f7ef498dcb9',
      industries: [
        'Auto Manufacturers',
        'Home Improvement Stores',
        'Apparel Manufacturing',
        'Food Distribution',
        'Leisure',
      ],
      sectors: ['Consumer Cyclical', 'Consumer Defensive'],
    },
  ];
}
