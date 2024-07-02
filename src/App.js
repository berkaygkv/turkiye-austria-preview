import React, { useState, useEffect } from 'react';
import { Camera, Users, Trophy, MapPin, ChevronDown, ChevronUp, Star, Clock, TrendingUp, Scale, AlertTriangle, Clipboard } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts';


const MatchPredictionTab = () => {
  const [expandedFactor, setExpandedFactor] = useState(null);

  const predictionData = [
    { name: 'Turkey Win', value: 35, color: '#ff0000' },
    { name: 'Draw', value: 30, color: '#808080' },
    { name: 'Austria Win', value: 35, color: '#0000ff' },
  ];

  const influentialFactors = [
    {
      name: 'Recent Form',
      turkeyScore: 7,
      austriaScore: 8,
      description: "Austria has shown slightly better form recently, winning their last two matches including a surprise victory against the Netherlands. Turkey, while also performing well, had a more mixed record in the group stage."
    },
    {
      name: 'Head-to-Head History',
      turkeyScore: 6,
      austriaScore: 7,
      description: "Austria has a slight edge in recent meetings, including a 6-1 victory in a friendly match earlier this year. However, competitive matches between these teams have historically been close."
    },
    {
      name: 'Key Player Availability',
      turkeyScore: 6,
      austriaScore: 5,
      description: "Turkey will be missing their influential midfielder Hakan Çalhanoğlu due to suspension, which could impact their midfield control. Austria is missing David Alaba due to injury, affecting their defensive stability."
    },
    {
      name: 'Tournament Performance',
      turkeyScore: 7,
      austriaScore: 8,
      description: "Both teams have performed well, each scoring 6 goals in the group stage. However, Austria's success in a tougher group, including a win against the Netherlands, gives them a slight edge."
    },
    {
      name: 'Tactical Matchup',
      turkeyScore: 7,
      austriaScore: 7,
      description: "Both teams have shown tactical flexibility. Turkey's counter-attacking style could exploit Austria's high defensive line, while Austria's high-pressing game could disrupt Turkey's build-up play. This factor seems evenly matched."
    }
  ];

  const toggleFactor = (index) => {
    if (expandedFactor === index) {
      setExpandedFactor(null);
    } else {
      setExpandedFactor(index);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Match Prediction</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Win Probability</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={predictionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {predictionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Influential Factors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={influentialFactors} layout="vertical">
              <XAxis type="number" domain={[0, 10]} />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="turkeyScore" name="Turkey" fill="#ff0000" />
              <Bar dataKey="austriaScore" name="Austria" fill="#0000ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Factor Analysis</h3>
        {influentialFactors.map((factor, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left font-semibold py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
              onClick={() => toggleFactor(index)}
            >
              {factor.name}
            </button>
            {expandedFactor === index && (
              <p className="mt-2 pl-4 text-gray-300">{factor.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Match Prediction</h3>
        <p>
          Based on the analysis of influential factors, the match between Turkey and Austria is expected to be closely contested. Both teams have shown strong performances in the tournament so far, but Austria's slightly better recent form and performance in a tougher group gives them a marginal advantage.
        </p>
        <p className="mt-4">
          The absence of key players on both sides (Çalhanoğlu for Turkey and Alaba for Austria) could play a significant role in the match outcome. Turkey's counter-attacking style could pose problems for Austria's high defensive line, while Austria's high-pressing game might disrupt Turkey's build-up play.
        </p>
        <p className="mt-4">
          <strong>Predicted Outcome:</strong> While the match could go either way, a narrow victory for Austria seems slightly more likely. However, the possibility of a draw leading to extra time and potentially penalties is also high. The match is expected to be tight and could be decided by small margins or individual moments of brilliance.
        </p>
        <p className="mt-4">
          Regardless of the outcome, fans can expect an intense and closely fought battle between two well-matched teams, each capable of progressing to the quarter-finals.
        </p>
      </div>
    </div>
  );
};

const SoccerGamePresentation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const TabButton = ({ label, tabId }) => (
    <button
      className={`px-4 py-2 font-semibold rounded-t-lg ${
        activeTab === tabId ? 'bg-gray-800 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-700'
      }`}
      onClick={() => setActiveTab(tabId)}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">UEFA Euro 2024: Turkey vs Austria</h1>
        
        <div className="flex mb-4 space-x-2">
          <TabButton label="Overview" tabId="overview" />
          <TabButton label="Key Points & Facts" tabId="keyPoints" />
          <TabButton label="Team Statistics" tabId="teamStats" />
          <TabButton label="Player Statistics" tabId="playerStats" />
          <TabButton label="Match Prediction" tabId="prediction" />
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          {activeTab === 'overview' && <OverviewScreen />}
          {activeTab === 'keyPoints' && <KeyPointsFactsPage />}
          {activeTab === 'teamStats' && <FullTeamStatisticsTab />}
          {activeTab === 'playerStats' && <PlayerStatsTab />}
          {activeTab === 'prediction' && <MatchPredictionTab />}
        </div>
      </div>
    </div>
  );
};

const OverviewScreen = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2024-07-02T22:00:00+03:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const teamInfo = {
    Turkey: {
      manager: "Vincenzo Montella",
      recentForm: "WLWLW",
      keyPlayer: "Hakan Çalhanoğlu"
    },
    Austria: {
      manager: "Ralf Rangnick",
      recentForm: "WWWLD",
      keyPlayer: "David Alaba"
    }
  };

  const [selectedTeam, setSelectedTeam] = useState('Turkey');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">Match Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Match Countdown</h3>
          <div className="flex justify-around text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-gray-700 p-4 rounded-lg">
                <span className="text-3xl font-bold">{value}</span>
                <p className="text-sm uppercase">{unit}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Match Info</h3>
          <div className="space-y-2">
            <p className="flex items-center"><Camera className="mr-2" size={20} /> Turkey vs Austria</p>
            <p className="flex items-center"><Users className="mr-2" size={20} /> Capacity: 47,069</p>
            <p className="flex items-center"><Trophy className="mr-2" size={20} /> UEFA Euro 2024 Round of 16</p>
            <p className="flex items-center"><MapPin className="mr-2" size={20} /> Red Bull Arena, Leipzig</p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">Team Overview</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <button 
              className={`px-4 py-2 rounded ${selectedTeam === 'Turkey' ? 'bg-red-600' : 'bg-gray-700'}`}
              onClick={() => setSelectedTeam('Turkey')}
            >
              Turkey
            </button>
            <button 
              className={`px-4 py-2 rounded ${selectedTeam === 'Austria' ? 'bg-red-600' : 'bg-gray-700'}`}
              onClick={() => setSelectedTeam('Austria')}
            >
              Austria
            </button>
          </div>
          <div className="space-y-2">
            <p><strong>Manager:</strong> {teamInfo[selectedTeam].manager}</p>
            <p><strong>Recent Form:</strong> {teamInfo[selectedTeam].recentForm}</p>
            <p><strong>Key Player:</strong> {teamInfo[selectedTeam].keyPlayer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const KeyPointsFactsPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      title: "Match Status",
      icon: <AlertTriangle className="mr-2" />,
      content: [
        "Suspended Players:",
        "- Turkey: Hakan Çalhanoğlu (accumulation of yellow cards)",
        "- Austria: No suspensions",
        "Injuries:",
        "- Turkey: Merih Demiral (doubtful, hamstring)",
        "- Austria: David Alaba (out, knee ligament)",
        "Weather Forecast: Clear sky, 22°C (72°F), Light breeze",
        "Referee: Artur Soares Dias (Portugal)"
      ]
    },
    {
      title: "Tactical Preview",
      icon: <Clipboard className="mr-2" />,
      content: [
        "Expected Formations:",
        "- Turkey: 4-2-3-1",
        "- Austria: 4-3-3",
        "Key Battles:",
        "- Zeki Çelik (TUR) vs Marcel Sabitzer (AUT) on Turkey's right flank",
        "- Arda Güler (TUR) vs Nicolas Seiwald (AUT) in midfield",
        "Turkey's likely strategy: Counter-attacking with quick transitions",
        "Austria's likely approach: High pressing and possession-based play"
      ]
    },
    {
      title: "Historical Context",
      icon: <Clock className="mr-2" />,
      content: [
        "This is only the second time Turkey and Austria have met in a major tournament.",
        "Their last competitive match was in 2001 during the 2002 World Cup qualifiers.",
        "Austria has never progressed beyond the round of 16 in the Euros.",
        "Turkey's best performance was reaching the semi-finals in Euro 2008.",
        "Recent Friendly: Austria defeated Turkey 6-1 in March 2024."
      ]
    },
    {
      title: "Recent Form",
      icon: <TrendingUp className="mr-2" />,
      content: [
        "Turkey won their group with impressive victories over Georgia and Czechia.",
        "Austria surprised many by topping their group, which included Netherlands and France.",
        "Turkey's recent form: WLWLW (Last match: W 2-1 vs Czechia)",
        "Austria's recent form: WWWLD (Last match: W 3-2 vs Netherlands)",
        "Turkey has scored in each of their last 8 international matches.",
        "Austria has kept only one clean sheet in their last 5 games."
      ]
    },
    {
      title: "Key Players",
      icon: <Star className="mr-2" />,
      content: [
        "Turkey:",
        "- Kerem Aktürkoğlu: 2 goals in the group stage, likely to play a crucial role in Çalhanoğlu's absence.",
        "- Mert Müldür: Solid defensive performances, also contributed a goal.",
        "Austria:",
        "- Marcel Sabitzer: 1 goal, 1 assist, and consistently high ratings.",
        "- Christoph Baumgartner: 2 goals, strong attacking presence.",
        "Players to watch:",
        "- Turkey: Arda Güler (potential starter due to Çalhanoğlu's suspension)",
        "- Austria: Marko Arnautović (impact substitute with 1 goal in the group stage)"
      ]
    },
    {
      title: "Team Comparison",
      icon: <Scale className="mr-2" />,
      content: [
        "Possession: Turkey (50.67%) vs Austria (49.33%)",
        "Goals Scored: Turkey (6) vs Austria (6)",
        "Goals Conceded: Turkey (5) vs Austria (4)",
        "Pass Accuracy: Turkey (86.33%) vs Austria (83.67%)",
        "Tackles per game: Turkey (21.67) vs Austria (22.33)",
        "Yellow Cards: Turkey (16) vs Austria (10)"
      ]
    },
    {
      title: "Venue Information",
      icon: <Users className="mr-2" />,
      content: [
        "The match will be held at the Red Bull Arena in Leipzig, Germany.",
        "Stadium capacity: 47,069",
        "This is the first Euro 2024 match to be held at this venue.",
        "The stadium is known for its steep stands and excellent acoustics.",
        "Expected attendance: 45,000+ (near full capacity)"
      ]
    },
    {
      title: "Tournament Impact",
      icon: <Trophy className="mr-2" />,
      content: [
        "The winner will face either Romania or Netherlands in the quarter-finals.",
        "This match could see either Turkey reach their first Euro quarter-final since 2008 or Austria reach their first ever.",
        "Both teams are looking to make history - Austria has never reached a Euro quarter-final, while Turkey aims to replicate their 2008 success.",
        "The losing team will be eliminated from the tournament.",
        "A draw after 90 minutes will lead to 30 minutes of extra time, followed by penalties if needed."
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">Key Points and Facts</h2>
      
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between"
              onClick={() => toggleSection(index)}
            >
              <span className="flex items-center">
                {section.icon}
                {section.title}
              </span>
              {expandedSections[index] ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSections[index] && (
              <div className="px-6 py-4 bg-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className={item.startsWith('-') ? 'ml-4' : ''}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FullTeamStatisticsTab = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const teamStats = {
    Turkey: {
      possession: 50.67,
      goalsScored: 6,
      goalsConceded: 5,
      shotsPerGame: 12.33,
      shotsOnTarget: 5.33,
      passAccuracy: 86.33,
      tacklesPerGame: 21.67,
      foulsCommitted: 12.33,
      yellowCards: 16,
      redCards: 0,
      cornersWon: 21,
      offsides: 3,
    },
    Austria: {
      possession: 49.33,
      goalsScored: 6,
      goalsConceded: 4,
      shotsPerGame: 12.67,
      shotsOnTarget: 5,
      passAccuracy: 83.67,
      tacklesPerGame: 22.33,
      foulsCommitted: 13.67,
      yellowCards: 10,
      redCards: 0,
      cornersWon: 11,
      offsides: 3,
    }
  };

  const comparisonData = [
    { name: 'Possession', Turkey: teamStats.Turkey.possession, Austria: teamStats.Austria.possession },
    { name: 'Goals Scored', Turkey: teamStats.Turkey.goalsScored, Austria: teamStats.Austria.goalsScored },
    { name: 'Goals Conceded', Turkey: teamStats.Turkey.goalsConceded, Austria: teamStats.Austria.goalsConceded },
    { name: 'Shots per Game', Turkey: teamStats.Turkey.shotsPerGame, Austria: teamStats.Austria.shotsPerGame },
    { name: 'Pass Accuracy', Turkey: teamStats.Turkey.passAccuracy, Austria: teamStats.Austria.passAccuracy },
    { name: 'Tackles per Game', Turkey: teamStats.Turkey.tacklesPerGame, Austria: teamStats.Austria.tacklesPerGame },
  ];

  const radarData = [
    { stat: 'Possession', Turkey: teamStats.Turkey.possession, Austria: teamStats.Austria.possession },
    { stat: 'Goals Scored', Turkey: teamStats.Turkey.goalsScored * 10, Austria: teamStats.Austria.goalsScored * 10 },
    { stat: 'Pass Accuracy', Turkey: teamStats.Turkey.passAccuracy, Austria: teamStats.Austria.passAccuracy },
    { stat: 'Shots on Target', Turkey: teamStats.Turkey.shotsOnTarget * 10, Austria: teamStats.Austria.shotsOnTarget * 10 },
    { stat: 'Tackles', Turkey: teamStats.Turkey.tacklesPerGame * 3, Austria: teamStats.Austria.tacklesPerGame * 3 },
    { stat: 'Corners Won', Turkey: teamStats.Turkey.cornersWon * 5, Austria: teamStats.Austria.cornersWon * 5 },
  ];

  const statNames = {
    possession: 'Possession (%)',
    goalsScored: 'Goals Scored',
    goalsConceded: 'Goals Conceded',
    shotsPerGame: 'Shots per Game',
    shotsOnTarget: 'Shots on Target',
    passAccuracy: 'Pass Accuracy (%)',
    tacklesPerGame: 'Tackles per Game',
    foulsCommitted: 'Fouls Committed',
    yellowCards: 'Yellow Cards',
    redCards: 'Red Cards',
    cornersWon: 'Corners Won',
    offsides: 'Offsides',
  };

  const getBetterStatColor = (stat, isTurkey) => {
    const turkeyValue = teamStats.Turkey[stat];
    const austriaValue = teamStats.Austria[stat];
    
    if (stat === 'goalsConceded' || stat === 'foulsCommitted' || stat === 'yellowCards' || stat === 'redCards' || stat === 'offsides') {
      return turkeyValue < austriaValue ? (isTurkey ? 'text-green-500' : 'text-red-500') : (isTurkey ? 'text-red-500' : 'text-green-500');
    } else {
      return turkeyValue > austriaValue ? (isTurkey ? 'text-green-500' : 'text-red-500') : (isTurkey ? 'text-red-500' : 'text-green-500');
    }
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Full Team Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-center">Key Statistics</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="font-semibold text-right">Turkey</div>
            <div className="font-semibold text-center">Statistic</div>
            <div className="font-semibold text-left">Austria</div>
            {Object.entries(statNames).map(([key, name]) => (
              <React.Fragment key={key}>
                <div 
                  className={`text-right ${hoveredStat === key ? 'bg-gray-700' : ''} ${getBetterStatColor(key, true)}`}
                  onMouseEnter={() => setHoveredStat(key)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  {teamStats.Turkey[key].toFixed(2)}
                </div>
                <div 
                  className={`text-center ${hoveredStat === key ? 'bg-gray-700' : ''}`}
                  onMouseEnter={() => setHoveredStat(key)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  {name}
                </div>
                <div 
                  className={`text-left ${hoveredStat === key ? 'bg-gray-700' : ''} ${getBetterStatColor(key, false)}`}
                  onMouseEnter={() => setHoveredStat(key)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  {teamStats.Austria[key].toFixed(2)}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Team Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Turkey" fill="#ff0000" />
              <Bar dataKey="Austria" fill="#0000ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Performance Radar</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="stat" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Turkey" dataKey="Turkey" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
              <Radar name="Austria" dataKey="Austria" stroke="#0000ff" fill="#0000ff" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Match Facts</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Turkey has scored in each of their last 8 international matches.</li>
          <li>Austria has kept only one clean sheet in their last 5 games.</li>
          <li>Both teams have scored 6 goals in the tournament so far.</li>
          <li>Turkey has received more yellow cards (16) compared to Austria (10).</li>
          <li>Austria has a slightly better goal difference (+2) than Turkey (+1).</li>
        </ul>
      </div>
    </div>
  );
};

const PlayerStatsTab = () => {
    const [selectedTeam, setSelectedTeam] = useState('Turkey');
    const [selectedGame, setSelectedGame] = useState('Game 1');
    const [selectedPlayer, setSelectedPlayer] = useState(null);
  
    const turkeyData = {
      'Game 1': [
        { name: 'Mert Günok', position: 'G', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 17, passAccuracy: 82.4, tackles: 0, rating: 7.2 },
        { name: 'Mert Müldür', position: 'D', minutesPlayed: 85, goals: 1, assists: 0, shots: 4, shotsOnTarget: 2, passes: 37, passAccuracy: 81.1, tackles: 2, rating: 7.7 },
        { name: 'Samet Akaydın', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 73, passAccuracy: 89.0, tackles: 2, rating: 8.0 },
        { name: 'Abdülkerim Bardakcı', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 66, passAccuracy: 92.4, tackles: 2, rating: 7.1 },
        { name: 'Ferdi Kadıoğlu', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 70, passAccuracy: 94.3, tackles: 2, rating: 7.5 },
        { name: 'Hakan Çalhanoğlu', position: 'M', minutesPlayed: 89, goals: 0, assists: 0, shots: 4, shotsOnTarget: 1, passes: 95, passAccuracy: 92.6, tackles: 2, rating: 7.2 },
        { name: 'Kaan Ayhan', position: 'M', minutesPlayed: 79, goals: 0, assists: 1, shots: 3, shotsOnTarget: 0, passes: 63, passAccuracy: 92.1, tackles: 2, rating: 7.7 },
        { name: 'Arda Güler', position: 'M', minutesPlayed: 79, goals: 1, assists: 0, shots: 1, shotsOnTarget: 1, passes: 41, passAccuracy: 92.7, tackles: 3, rating: 7.8 },
        { name: 'Orkun Kökçü', position: 'M', minutesPlayed: 90, goals: 0, assists: 1, shots: 4, shotsOnTarget: 1, passes: 50, passAccuracy: 82.0, tackles: 2, rating: 7.0 },
        { name: 'Kenan Yıldız', position: 'M', minutesPlayed: 85, goals: 0, assists: 0, shots: 2, shotsOnTarget: 1, passes: 36, passAccuracy: 91.7, tackles: 0, rating: 6.7 },
        { name: 'Barış Alper Yılmaz', position: 'F', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 13, passAccuracy: 76.9, tackles: 0, rating: 6.8 },
      ],
      'Game 2': [
        { name: 'Altay Bayındır', position: 'G', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 32, passAccuracy: 81.3, tackles: 0, rating: 6.1 },
        { name: 'Zeki Çelik', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 37, passAccuracy: 86.5, tackles: 3, rating: 6.3 },
        { name: 'Samet Akaydın', position: 'D', minutesPlayed: 75, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 40, passAccuracy: 87.5, tackles: 3, rating: 6.3 },
        { name: 'Abdülkerim Bardakcı', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 66, passAccuracy: 92.4, tackles: 2, rating: 6.3 },
        { name: 'Ferdi Kadıoğlu', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 44, passAccuracy: 84.1, tackles: 4, rating: 6.9 },
        { name: 'Hakan Çalhanoğlu', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 63, passAccuracy: 96.8, tackles: 3, rating: 7.2 },
        { name: 'Kaan Ayhan', position: 'M', minutesPlayed: 58, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 26, passAccuracy: 76.9, tackles: 2, rating: 6.5 },
        { name: 'Yunus Akgün', position: 'M', minutesPlayed: 70, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 14, passAccuracy: 92.9, tackles: 2, rating: 6.5 },
        { name: 'Orkun Kökçü', position: 'M', minutesPlayed: 45, goals: 0, assists: 0, shots: 2, shotsOnTarget: 1, passes: 8, passAccuracy: 50.0, tackles: 1, rating: 6.5 },
        { name: 'Kerem Aktürkoğlu', position: 'M', minutesPlayed: 58, goals: 0, assists: 0, shots: 3, shotsOnTarget: 1, passes: 14, passAccuracy: 57.1, tackles: 1, rating: 6.5 },
        { name: 'Barış Alper Yılmaz', position: 'F', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 23, passAccuracy: 73.9, tackles: 1, rating: 6.6 },
      ],
      'Game 3': [
        { name: 'Mert Günok', position: 'G', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 37, passAccuracy: 56.8, tackles: 0, rating: 6.8 },
        { name: 'Mert Müldür', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 52, passAccuracy: 92.3, tackles: 3, rating: 7.1 },
        { name: 'Samet Akaydın', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 57, passAccuracy: 91.2, tackles: 3, rating: 7.5 },
        { name: 'Merih Demiral', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 52, passAccuracy: 88.5, tackles: 1, rating: 7.1 },
        { name: 'Ferdi Kadıoğlu', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 58, passAccuracy: 81.0, tackles: 2, rating: 7.4 },
        { name: 'Salih Özcan', position: 'M', minutesPlayed: 45, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 36, passAccuracy: 88.9, tackles: 1, rating: 6.6 },
        { name: 'İsmail Yüksek', position: 'M', minutesPlayed: 63, goals: 0, assists: 1, shots: 1, shotsOnTarget: 0, passes: 52, passAccuracy: 90.4, tackles: 3, rating: 7.2 },
        { name: 'Arda Güler', position: 'M', minutesPlayed: 75, goals: 0, assists: 0, shots: 3, shotsOnTarget: 0, passes: 34, passAccuracy: 94.1, tackles: 1, rating: 7.2 },
        { name: 'Hakan Çalhanoğlu', position: 'M', minutesPlayed: 87, goals: 1, assists: 0, shots: 3, shotsOnTarget: 1, passes: 35, passAccuracy: 97.1, tackles: 0, rating: 7.2 },
        { name: 'Kenan Yıldız', position: 'M', minutesPlayed: 76, goals: 0, assists: 0, shots: 6, shotsOnTarget: 1, passes: 23, passAccuracy: 82.6, tackles: 2, rating: 6.9 },
        { name: 'Barış Alper Yılmaz', position: 'F', minutesPlayed: 90, goals: 0, assists: 0, shots: 2, shotsOnTarget: 2, passes: 28, passAccuracy: 89.3, tackles: 1, rating: 7.8 },
      ],
    };
  
    const austriaData = {
      'Game 1': [
        { name: 'Patrick Pentz', position: 'G', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 31, passAccuracy: 93.5, tackles: 0, rating: 7.0 },
        { name: 'Stefan Posch', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 36, passAccuracy: 72.2, tackles: 3, rating: 6.8 },
        { name: 'Kevin Danso', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 62, passAccuracy: 88.7, tackles: 0, rating: 6.9 },
        { name: 'Maximilian Wöber', position: 'D', minutesPlayed: 59, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 48, passAccuracy: 79.2, tackles: 3, rating: 6.5 },
        { name: 'Phillipp Mwene', position: 'D', minutesPlayed: 88, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 24, passAccuracy: 95.8, tackles: 6, rating: 7.1 },
        { name: 'Nicolas Seiwald', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 62, passAccuracy: 91.9, tackles: 8, rating: 7.4 },
        { name: 'Florian Grillitsch', position: 'M', minutesPlayed: 60, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 48, passAccuracy: 83.3, tackles: 2, rating: 6.6 },
        { name: 'Konrad Laimer', position: 'M', minutesPlayed: 89, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 33, passAccuracy: 78.8, tackles: 3, rating: 6.5 },
        { name: 'Christoph Baumgartner', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 2, shotsOnTarget: 2, passes: 24, passAccuracy: 95.8, tackles: 0, rating: 6.1 },
        { name: 'Marcel Sabitzer', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 26, passAccuracy: 76.9, tackles: 0, rating: 7.0 },
        { name: 'Michael Gregoritsch', position: 'F', minutesPlayed: 59, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 11, passAccuracy: 72.7, tackles: 0, rating: 6.5 },
      ],
      'Game 2': [
        { name: 'Patrick Pentz', position: 'G', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 36, passAccuracy: 66.7, tackles: 0, rating: 6.8 },
        { name: 'Stefan Posch', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 5, shotsOnTarget: 3, passes: 40, passAccuracy: 80.0, tackles: 2, rating: 7.4 },
        { name: 'Gernot Trauner', position: 'D', minutesPlayed: 59, goals: 1, assists: 0, shots: 1, shotsOnTarget: 1, passes: 42, passAccuracy: 95.2, tackles: 0, rating: 7.5 },
        { name: 'Philipp Lienhart', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 38, passAccuracy: 89.5, tackles: 0, rating: 7.1 },
        { name: 'Phillipp Mwene', position: 'D', minutesPlayed: 63, goals: 0, assists: 1, shots: 0, shotsOnTarget: 0, passes: 42, passAccuracy: 88.1, tackles: 0, rating: 7.4 },
        { name: 'Nicolas Seiwald', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 1, passes: 44, passAccuracy: 95.5, tackles: 2, rating: 7.3 },
        { name: 'Florian Grillitsch', position: 'M', minutesPlayed: 45, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 39, passAccuracy: 79.5, tackles: 0, rating: 6.8 },
        { name: 'Christoph Baumgartner', position: 'M', minutesPlayed: 81, goals: 1, assists: 0, shots: 1, shotsOnTarget: 1, passes: 29, passAccuracy: 75.9, tackles: 2, rating: 7.7 },
        { name: 'Konrad Laimer', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 42, passAccuracy: 88.1, tackles: 1, rating: 6.8 },
        { name: 'Marcel Sabitzer', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 5, shotsOnTarget: 1, passes: 33, passAccuracy: 69.7, tackles: 1, rating: 8.0 },
        { name: 'Marko Arnautović', position: 'F', minutesPlayed: 81, goals: 1, assists: 0, shots: 1, shotsOnTarget: 1, passes: 14, passAccuracy: 78.6, tackles: 1, rating: 7.4 },
      ],
      'Game 3': [
        { name: 'Patrick Pentz', position: 'G', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 41, passAccuracy: 68.3, tackles: 0, rating: 6.3 },
        { name: 'Stefan Posch', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 37, passAccuracy: 62.2, tackles: 6, rating: 6.9 },
        { name: 'Philipp Lienhart', position: 'D', minutesPlayed: 62, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 41, passAccuracy: 95.1, tackles: 1, rating: 6.6 },
        { name: 'Maximilian Wöber', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 40, passAccuracy: 92.5, tackles: 1, rating: 6.9 },
        { name: 'Alexander Prass', position: 'D', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 33, passAccuracy: 72.7, tackles: 5, rating: 6.6 },
        { name: 'Nicolas Seiwald', position: 'M', minutesPlayed: 90, goals: 0, assists: 0, shots: 0, shotsOnTarget: 0, passes: 49, passAccuracy: 69.4, tackles: 3, rating: 6.9 },
        { name: 'Florian Grillitsch', position: 'M', minutesPlayed: 64, goals: 0, assists: 1, shots: 3, shotsOnTarget: 1, passes: 35, passAccuracy: 85.7, tackles: 0, rating: 6.9 },
        { name: 'Romano Schmid', position: 'M', minutesPlayed: 89, goals: 1, assists: 0, shots: 1, shotsOnTarget: 1, passes: 33, passAccuracy: 84.8, tackles: 1, rating: 7.3 },
        { name: 'Marcel Sabitzer', position: 'M', minutesPlayed: 90, goals: 1, assists: 0, shots: 4, shotsOnTarget: 2, passes: 35, passAccuracy: 71.4, tackles: 1, rating: 7.5 },
        { name: 'Patrick Wimmer', position: 'M', minutesPlayed: 63, goals: 0, assists: 0, shots: 1, shotsOnTarget: 0, passes: 13, passAccuracy: 76.9, tackles: 1, rating: 6.3 },
        { name: 'Marko Arnautović', position: 'F', minutesPlayed: 78, goals: 0, assists: 0, shots: 1, shotsOnTarget: 1, passes: 13, passAccuracy: 92.3, tackles: 1, rating: 6.6 },
      ],
    };
  
    const playerData = selectedTeam === 'Turkey' ? turkeyData : austriaData;
  
    const handlePlayerClick = (player) => {
      setSelectedPlayer(player);
    };
  
    return (
      <div className="w-full p-4 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-6">Player Statistics</h2>
        <p className="mb-4">Group Stage Performance</p>
        <div className="mb-4">
          <button
            className={`px-4 py-2 mr-2 ${selectedTeam === 'Turkey' ? 'bg-blue-500' : 'bg-gray-600'}`}
            onClick={() => setSelectedTeam('Turkey')}
          >
            Turkey
          </button>
          <button
            className={`px-4 py-2 ${selectedTeam === 'Austria' ? 'bg-blue-500' : 'bg-gray-600'}`}
            onClick={() => setSelectedTeam('Austria')}
          >
            Austria
          </button>
        </div>
        <div className="mb-4">
          <button
            className={`px-4 py-2 mr-2 ${selectedGame === 'Game 1' ? 'bg-green-500' : 'bg-gray-600'}`}
            onClick={() => setSelectedGame('Game 1')}
          >
            Game 1
          </button>
          <button
            className={`px-4 py-2 mr-2 ${selectedGame === 'Game 2' ? 'bg-green-500' : 'bg-gray-600'}`}
            onClick={() => setSelectedGame('Game 2')}
          >
            Game 2
          </button>
          <button
            className={`px-4 py-2 ${selectedGame === 'Game 3' ? 'bg-green-500' : 'bg-gray-600'}`}
            onClick={() => setSelectedGame('Game 3')}
          >
            Game 3
          </button>
        </div>
        <PlayerStatsTable data={playerData[selectedGame]} onPlayerClick={handlePlayerClick} />
        {selectedPlayer && (
          <PlayerRadarChart player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
        )}
      </div>
    );
  };
  
  const PlayerStatsTable = ({ data, onPlayerClick }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-600 p-2">Name</th>
            <th className="border border-gray-600 p-2">Pos</th>
            <th className="border border-gray-600 p-2">MP</th>
            <th className="border border-gray-600 p-2">G</th>
            <th className="border border-gray-600 p-2">A</th>
            <th className="border border-gray-600 p-2">S</th>
            <th className="border border-gray-600 p-2">SOT</th>
            <th className="border border-gray-600 p-2">P</th>
            <th className="border border-gray-600 p-2">PA</th>
            <th className="border border-gray-600 p-2">T</th>
            <th className="border border-gray-600 p-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr 
              key={index} 
              className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} cursor-pointer hover:bg-gray-600`}
              onClick={() => onPlayerClick(player)}
            >
              <td className="border border-gray-600 p-2">{player.name}</td>
              <td className="border border-gray-600 p-2">{player.position}</td>
              <td className="border border-gray-600 p-2">{player.minutesPlayed}</td>
              <td className="border border-gray-600 p-2">{player.goals}</td>
              <td className="border border-gray-600 p-2">{player.assists}</td>
              <td className="border border-gray-600 p-2">{player.shots}</td>
              <td className="border border-gray-600 p-2">{player.shotsOnTarget}</td>
              <td className="border border-gray-600 p-2">{player.passes}</td>
              <td className="border border-gray-600 p-2">{player.passAccuracy}%</td>
              <td className="border border-gray-600 p-2">{player.tackles}</td>
              <td className="border border-gray-600 p-2">{player.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  const PlayerRadarChart = ({ player, onClose }) => {
    const [hoveredStat, setHoveredStat] = useState(null);
  
    const stats = [
      { name: 'Rating', value: player.rating / 10 },
      { name: 'Goals', value: player.goals / 3 },
      { name: 'Assists', value: player.assists / 3 },
      { name: 'Shots', value: player.shots / 10 },
      { name: 'SOT', value: player.shotsOnTarget / 5 },
      { name: 'Passes', value: player.passes / 100 },
      { name: 'Pass Acc', value: player.passAccuracy / 100 },
      { name: 'Tackles', value: player.tackles / 10 },
    ];
  
    const maxValue = Math.max(...stats.map(stat => stat.value));
    const scale = (value) => (value / maxValue) * 80;
  
    const points = stats.map((stat, i) => {
      const angle = (Math.PI * 2 * i) / stats.length;
      const x = 150 + scale(stat.value) * Math.cos(angle - Math.PI / 2);
      const y = 150 + scale(stat.value) * Math.sin(angle - Math.PI / 2);
      return `${x},${y}`;
    }).join(' ');
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-lg w-[600px]">
          <h3 className="text-2xl font-bold mb-4 text-center">{player.name} - {player.position}</h3>
          <svg viewBox="0 0 300 300" className="w-full h-[500px]">
            {[1, 2, 3, 4].map((ring, i) => (
              <polygon
                key={i}
                points={stats.map((_, j) => {
                  const angle = (Math.PI * 2 * j) / stats.length;
                  const x = 150 + (20 * ring) * Math.cos(angle - Math.PI / 2);
                  const y = 150 + (20 * ring) * Math.sin(angle - Math.PI / 2);
                  return `${x},${y}`;
                }).join(' ')}
                fill="none"
                stroke="#718096"
                strokeWidth="0.5"
              />
            ))}
            {stats.map((stat, i) => {
              const angle = (Math.PI * 2 * i) / stats.length;
              const x = 150 + 80 * Math.cos(angle - Math.PI / 2);
              const y = 150 + 80 * Math.sin(angle - Math.PI / 2);
              return (
                <line
                  key={i}
                  x1="150"
                  y1="150"
                  x2={x}
                  y2={y}
                  stroke="#718096"
                  strokeWidth="0.5"
                />
              );
            })}
            <polygon
              points={points}
              fill="#4CAF50"
              fillOpacity="0.6"
              stroke="#4CAF50"
              strokeWidth="2"
            />
            {stats.map((stat, i) => {
              const angle = (Math.PI * 2 * i) / stats.length;
              const x = 150 + 100 * Math.cos(angle - Math.PI / 2);
              const y = 150 + 100 * Math.sin(angle - Math.PI / 2);
              const hoverX = 150 + scale(stat.value) * Math.cos(angle - Math.PI / 2);
              const hoverY = 150 + scale(stat.value) * Math.sin(angle - Math.PI / 2);
              return (
                <g key={i}>
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#e5e5e5"
                    fontSize="12"
                  >
                    {stat.name}
                  </text>
                  <circle
                    cx={hoverX}
                    cy={hoverY}
                    r="5"
                    fill="transparent"
                    stroke="transparent"
                    strokeWidth="10"
                    onMouseEnter={() => setHoveredStat(stat)}
                    onMouseLeave={() => setHoveredStat(null)}
                  />
                </g>
              );
            })}
            {hoveredStat && (
              <g>
                <rect x="100" y="270" width="100" height="25" fill="#1F2937" />
              <text x="150" y="285" textAnchor="middle" fill="#e5e5e5" fontSize="12">
                {hoveredStat.name}: {player[hoveredStat.name.toLowerCase()]}
              </text>
            </g>
          )}
        </svg>
        <div className="flex justify-center mt-4">
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoccerGamePresentation;

