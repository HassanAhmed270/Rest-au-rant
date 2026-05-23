import { useMemo, useState } from "react";
import { menuItems, menuCategories } from "../data/menuData";
import bgMenu from "../assets/bgMenu.png";
import bgAbout from "../assets/bgAbout.png";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoriesToRender =
    activeCategory === "All"
      ? menuCategories.filter((c) => c !== "All")
      : [activeCategory];

  const groupedItems = useMemo(() => {
    return categoriesToRender.map((cat) => ({
      category: cat,
      items: menuItems.filter((item) => item.category === cat),
    }));
  }, [activeCategory]);

  return (
    <div className="bg-[#111111] min-h-screen pt-20">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">

        {/* MAIN BACKGROUND STACK */}
        <>
          {/* Main background */}
          <img
            src={bgMenu}
            alt="Menu Background"
            className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105"
          />

          {/* Secondary taste overlay */}
          <img
            src={bgAbout}
            alt="Taste Overlay"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay scale-110"
          />
        </>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-orange-400 mb-5">
            Our Signature Menu
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            BBQ, Fast Food
            <span className="text-orange-500"> & Grill</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Crafted with bold flavors, fresh ingredients and authentic smoky
            taste.
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="sticky top-20 z-30 bg-[#111111]/90 backdrop-blur-xl border-b border-white/10 px-6 py-5">

        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">

          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 border
              
              ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-white/10 text-gray-300 hover:border-orange-500 hover:text-orange-400"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      {/* MENU SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">

        {groupedItems.map((section) => (
          <div key={section.category} className="mb-20">

            {/* CATEGORY IMAGE + TITLE */}
            <div className="relative rounded-[30px] overflow-hidden mb-10 h-[200px] sm:h-[240px]">


              <img
                src={section.items[0]?.image}
                alt={section.category}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {section.category}
                </h2>

                <p className="text-gray-300 mt-3">
                  {section.items.length} Delicious Items
                </p>
              </div>
            </div>

            {/* MENU CARD STYLE */}
            <div className="bg-[#181818] border border-white/10 rounded-[30px] overflow-hidden">

              {section.items.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid grid-cols-[90px_1fr_auto] gap-5 items-center px-6 py-5
                  
                  ${
                    index !== section.items.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >

                  {/* IMAGE */}
                  <div className="w-[90px] h-[90px] rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* DETAILS */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-white text-xl font-semibold">
                        {item.name}
                      </h3>

                      {item.popular && (
                        <span className="bg-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full border border-orange-500/20">
                          Popular
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="text-right">
                    <p className="text-orange-400 text-2xl font-bold whitespace-nowrap">
                      Rs. {item.price}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Menu;