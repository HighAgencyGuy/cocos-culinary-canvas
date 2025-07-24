import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-menu.jpg";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  dietary: string[];
  ingredients: string[];
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Truffle Arancini",
    description: "Crispy risotto balls filled with wild mushrooms and truffle oil",
    price: "$18",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
    category: "starters",
    dietary: ["vegetarian"],
    ingredients: ["Arborio rice", "Wild mushrooms", "Truffle oil", "Parmesan", "Fresh herbs"]
  },
  {
    id: "2",
    name: "Herb-Crusted Lamb",
    description: "Tender lamb rack with rosemary and thyme crust, served with seasonal vegetables",
    price: "$42",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
    category: "mains",
    dietary: ["gluten-free"],
    ingredients: ["Rack of lamb", "Fresh herbs", "Seasonal vegetables", "Red wine jus"]
  },
  {
    id: "3",
    name: "Chocolate Soufflé",
    description: "Light and airy chocolate soufflé with vanilla bean ice cream",
    price: "$16",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
    category: "desserts",
    dietary: ["vegetarian"],
    ingredients: ["Dark chocolate", "Eggs", "Vanilla bean", "Heavy cream", "Sugar"]
  },
  {
    id: "4",
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower purée and pancetta",
    price: "$28",
    image: "https://images.unsplash.com/photo-1559847844-d724b19e0d7b?w=500",
    category: "starters",
    dietary: ["gluten-free"],
    ingredients: ["Fresh scallops", "Cauliflower", "Pancetta", "Microgreens", "Lemon oil"]
  },
  {
    id: "5",
    name: "Beef Wellington",
    description: "Classic beef wellington with mushroom duxelles in flaky pastry",
    price: "$48",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
    category: "mains",
    dietary: [],
    ingredients: ["Beef tenderloin", "Mushroom duxelles", "Puff pastry", "Prosciutto", "Herbs"]
  },
  {
    id: "6",
    name: "Lemon Tart",
    description: "Tangy lemon curd in buttery pastry shell with fresh berries",
    price: "$14",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500",
    category: "desserts",
    dietary: ["vegetarian"],
    ingredients: ["Lemon curd", "Pastry shell", "Fresh berries", "Mint", "Powdered sugar"]
  }
];

const packages = [
  {
    id: "wedding",
    name: "Wedding Package",
    description: "Complete wedding catering service with multiple courses",
    price: "From $85 per person",
    features: ["3-course meal", "Cocktail hour", "Wedding cake", "Service staff"]
  },
  {
    id: "corporate",
    name: "Corporate Events",
    description: "Professional catering for business meetings and conferences",
    price: "From $45 per person",
    features: ["Buffet or plated service", "Dietary accommodations", "Setup included", "Professional service"]
  },
  {
    id: "private",
    name: "Private Parties",
    description: "Intimate dining experiences for special celebrations",
    price: "From $65 per person",
    features: ["Custom menu", "Personal chef", "Full service", "Cleanup included"]
  }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = ["all", "starters", "mains", "desserts"];
  
  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <PageHero
        title="Our Menu"
        subtitle="Exquisite dishes crafted with passion and the finest ingredients"
        backgroundImage={heroImage}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-muted rounded-lg p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                    selectedCategory === category
                      ? "bg-brand-cocoa text-brand-cream"
                      : "text-foreground hover:text-brand-cocoa"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-shadow duration-300 group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-brand-cocoa">{item.name}</h3>
                    <span className="text-lg font-semibold text-brand-warm">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.dietary.map((diet) => (
                      <Badge key={diet} variant="secondary" className="text-xs">
                        {diet}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-cocoa mb-4">
              Catering Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete catering solutions tailored to your special event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-shadow">
                <h3 className="text-2xl font-serif font-bold text-brand-cocoa mb-4">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="text-xl font-semibold text-brand-warm mb-6">{pkg.price}</div>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="text-sm text-foreground flex items-center">
                      <span className="w-2 h-2 bg-accent-gradient rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Menu Item Details */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.name}
      >
        {selectedItem && (
          <div className="space-y-6">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-brand-warm">{selectedItem.price}</span>
                <div className="flex gap-2">
                  {selectedItem.dietary.map((diet) => (
                    <Badge key={diet} variant="secondary">
                      {diet}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-foreground mb-6">{selectedItem.description}</p>
              <div>
                <h4 className="font-semibold text-brand-cocoa mb-3">Ingredients:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedItem.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-gradient rounded-full mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button variant="hero" className="w-full">
              Add to Event Quote
            </Button>
          </div>
        )}
      </Modal>
    </Layout>
  );
}