import { useState } from "react";

function App() {
  const startups = [
    {
      id: 1,
      name: "TechNova",
      industry: "Technology",
      location: "California",
      seed_round: "Seed",
      description: "Building innovative technology for the future.",
    },
    {
      id: 2,
      name: "HealthAI",
      industry: "Healthcare",
      location: "New York",
      seed_round: "Series A",
      description: "Making healthcare smarter and more accessible.",
    },
    {
      id: 3,
      name: "GreenFuture",
      industry: "Climate Tech",
      location: "Boston",
      seed_round: "Pre-Seed",
      description: "Creating sustainable solutions for a greener world.",
    },
  ];

  // Search and filter states
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [savedStartups, setSavedStartups] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  // Apply all filters together
  const filteredStartups = startups.filter((startup) => {
    const matchesSearch = startup.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "All" ||
      startup.industry === selectedIndustry;

    const matchesLocation =
      selectedLocation === "All" ||
      startup.location === selectedLocation;

    const matchesStage =
      selectedStage === "All" ||
      startup.seed_round === selectedStage;

    const matchesSaved =
      !showSaved || savedStartups.includes(startup.id);

    return (
      matchesSearch &&
      matchesIndustry &&
      matchesLocation &&
      matchesStage &&
      matchesSaved
    );
  });

  // Save or unsave a startup
  const toggleSave = (id) => {
    setSavedStartups((previous) =>
      previous.includes(id)
        ? previous.filter((savedId) => savedId !== id)
        : [...previous, id]
    );
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #f9a8d4",
    backgroundColor: "#ffffff",
    color: "#831843",
    width: "100%",
    fontSize: "14px",
    marginTop: "7px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff1f7",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#831843",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <header
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <h1 style={{ color: "#be185d", fontSize: "36px" }}>
            Discover Startups ♡
          </h1>
          <p style={{ color: "#9d5877" }}>
            Find startups that match your interests!
          </p>
        </header>

        {/* Search and filter section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "18px",
            marginBottom: "30px",
            boxShadow: "0 5px 20px rgba(219,39,119,0.1)",
          }}
        >
          <h2 style={{ color: "#be185d", marginTop: 0 }}>
            Find Your Perfect Match
          </h2>

          <input
            type="text"
            placeholder="Search startups by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              ...inputStyle,
              marginBottom: "20px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
            }}
          >
            <div>
              <label htmlFor="industry">Industry</label>
              <select
                id="industry"
                style={inputStyle}
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                <option value="All">All Industries</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Climate Tech">Climate Tech</option>
              </select>
            </div>

            <div>
              <label htmlFor="location">Location</label>
              <select
                id="location"
                style={inputStyle}
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="All">All Locations</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Boston">Boston</option>
              </select>
            </div>

            <div>
              <label htmlFor="stage">Funding Stage</label>
              <select
                id="stage"
                style={inputStyle}
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
              >
                <option value="All">All Stages</option>
                <option value="Pre-Seed">Pre-Seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Startup results */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#be185d", margin: 0 }}>
            {showSaved ? "Saved Startups" : "Explore Startups"} (
            {filteredStartups.length})
          </h2>

          <button
            onClick={() => setShowSaved(!showSaved)}
            style={{
              backgroundColor: "#ec4899",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "12px 18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {showSaved ? "View All Startups" : "♡ View Saved"}
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "20px",
          }}
        >
          {filteredStartups.map((startup) => {
            const isSaved = savedStartups.includes(startup.id);

            return (
              <div
                key={startup.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "18px",
                  padding: "25px",
                  border: "1px solid #fbcfe8",
                  boxShadow: "0 6px 20px rgba(219,39,119,0.12)",
                  textAlign: "left",
                  color: "#831843",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <h2 style={{ color: "#be185d", margin: 0 }}>
                    {startup.name}
                  </h2>
                  <span style={{ fontSize: "24px" }}>🌸</span>
                </div>

                <p
                  style={{
                    color: "#9d5877",
                    lineHeight: "1.6",
                    minHeight: "45px",
                  }}
                >
                  {startup.description}
                </p>

                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#fce7f3",
                    color: "#be185d",
                    padding: "7px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  {startup.industry}
                </span>

                <p>📍 {startup.location}</p>
                <p>🚀 Funding Stage: {startup.seed_round}</p>

                <div
                  style={{
                    borderTop: "1px solid #fbcfe8",
                    paddingTop: "18px",
                    marginTop: "20px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleSave(startup.id)}
                    style={{
                      width: "100%",
                      backgroundColor: isSaved
                        ? "#fce7f3"
                        : "#ec4899",
                      color: isSaved ? "#be185d" : "white",
                      border: "none",
                      padding: "12px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {isSaved ? "♥ Saved!" : "♡ Save Startup"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredStartups.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "35px",
              backgroundColor: "white",
              borderRadius: "15px",
              color: "#9d5877",
            }}
          >
            No startups match your search or filters.
          </div>
        )}

        <p
          style={{
            textAlign: "center",
            color: "#9d5877",
            marginTop: "40px",
            fontSize: "13px",
          }}
        >
          Made with ♡ | Startup Discovery
        </p>
      </div>
    </div>
  );
}

export default App;