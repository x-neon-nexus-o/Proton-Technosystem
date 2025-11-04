import Image from 'next/image';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productCategories, placeholderImages } from '@/lib/data';

export default function ProductCategories() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
            Products We Offer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore a range of new and refurbished products with warranty.
          </p>
        </div>

        <Tabs defaultValue={productCategories[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto mb-8">
            {productCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="py-3 text-sm font-semibold">
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {productCategories.map((cat) => {
            const image = placeholderImages.find(p => p.id === cat.imageId);
            return (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.items.map((item) => (
                    <div key={item.name} className="group relative overflow-hidden rounded-xl glassmorphic shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      {image && (
                         <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          width={400}
                          height={300}
                          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground mt-2 h-12">{item.spec}</p>
                        <Button className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold transition-all hover:saturate-150">
                          Inquire Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  );
}
