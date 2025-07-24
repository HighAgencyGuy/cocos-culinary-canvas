import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Modal } from "@/components/ui/modal";
import heroImage from "@/assets/hero-gallery.jpg";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  event?: string;
  location?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600",
    alt: "Elegant wedding reception setup",
    category: "weddings",
    event: "Garden Wedding Reception",
    location: "The Botanical Gardens"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
    alt: "Gourmet plated dish",
    category: "dishes",
    event: "Signature Beef Wellington",
    location: "Corporate Gala"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600",
    alt: "Corporate event buffet",
    category: "corporate",
    event: "Annual Conference Lunch",
    location: "Convention Center"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600",
    alt: "Private party setup",
    category: "private",
    event: "Birthday Celebration",
    location: "Private Residence"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600",
    alt: "Appetizer presentation",
    category: "dishes",
    event: "Truffle Arancini",
    location: "Wine Tasting Event"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=600",
    alt: "Wedding ceremony catering",
    category: "weddings",
    event: "Outdoor Wedding Ceremony",
    location: "Vineyard Estate"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1559847844-d724b19e0d7b?w=600",
    alt: "Seafood specialty dish",
    category: "dishes",
    event: "Seared Scallops",
    location: "Coastal Wedding"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1556909114-4e1a9b7e1026?w=600",
    alt: "Corporate networking event",
    category: "corporate",
    event: "Product Launch Party",
    location: "Downtown Hotel"
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
    alt: "Elegant dessert presentation",
    category: "dishes",
    event: "Chocolate Soufflé",
    location: "Anniversary Dinner"
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ["all", "weddings", "corporate", "private", "dishes"];
  
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <Layout>
      <PageHero
        title="Our Gallery"
        subtitle="A visual journey through our finest culinary creations and memorable events"
        backgroundImage={heroImage}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 bg-muted rounded-lg p-1">
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
                  {category === "all" ? "All Events" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-brand-cocoa mb-1">{image.event}</h3>
                  <p className="text-sm text-muted-foreground">{image.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="max-w-4xl"
      >
        {selectedImage && (
          <div className="space-y-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-brand-cocoa mb-2">
                {selectedImage.event}
              </h3>
              <p className="text-muted-foreground mb-4">{selectedImage.location}</p>
              <div className="inline-block px-3 py-1 bg-muted rounded-full">
                <span className="text-sm font-medium capitalize">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
}