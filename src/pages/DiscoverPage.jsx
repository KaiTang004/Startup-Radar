import { useOutletContext } from "react-router-dom";
import "./DiscoverPage.css";

export default function DiscoverPage() {
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

  const {
    search,
    setSearch,
    selectedIndustry,
    setSelectedIndustry,
    selectedLocation,
    setSelectedLocation,
    selectedStage,
    setSelectedStage,
    savedStartups,
    setSavedStartups,
    showSaved,
    setShowSaved,
  } = useOutletContext();

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

  return (
    <main className="discover-page">
        <header className="discover-header">
          <h1 className="discover-title">
            Discover Startups ♡
          </h1>
          <p className="discover-subtitle">
            Find startups that match your interests!
          </p>
        </header>

        {/* Search and filter section */}
        <div className="search-panel">
          <h2 className="search-panel-title">
            Find Your Perfect Match
          </h2>

          <input
            type="text"
            placeholder="Search startups by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="startup-search"
          />

          <div className="startup-filters">
            <div>
              <label htmlFor="industry">Industry</label>
              <select
                id="industry"
                className="startup-filter"
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
                className="startup-filter"
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
                className="startup-filter"
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
        <div className="results-toolbar">
          <h2 className="results-title">
            {showSaved ? "Saved Startups" : "Explore Startups"} (
            {filteredStartups.length})
          </h2>

          <button
            onClick={() => setShowSaved(!showSaved)}
            className="saved-toggle"
          >
            {showSaved ? "View All Startups" : "♡ View Saved"}
          </button>
        </div>

        <div className="startup-grid">
          {filteredStartups.map((startup) => {
            const isSaved = savedStartups.includes(startup.id);

            return (
              <div
                key={startup.id}
                className="startup-card"
              >
                <div className="startup-card-header">
                  <h2 className="startup-name">
                    {startup.name}
                  </h2>
                  <span className="startup-flower">🌸</span>
                </div>

                <p className="startup-description">
                  {startup.description}
                </p>

                <span className="startup-industry">
                  {startup.industry}
                </span>

                <p>📍 {startup.location}</p>
                <p>🚀 Funding Stage: {startup.seed_round}</p>

                <div className="startup-card-actions">
                  <button
                    type="button"
                    onClick={() => toggleSave(startup.id)}
                    className={`save-startup${isSaved ? " is-saved" : ""}`}
                    aria-pressed={isSaved}
                  >
                    {isSaved ? "♥ Saved!" : "♡ Save Startup"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredStartups.length === 0 && (
          <div className="empty-results">
            No startups match your search or filters.
          </div>
        )}

        <p className="discover-footer">
          Made with ♡ | Startup Discovery
        </p>
    </main>
  );
}

