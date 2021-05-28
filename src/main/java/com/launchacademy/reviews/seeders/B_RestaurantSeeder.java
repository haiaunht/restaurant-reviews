package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.Category;
import com.launchacademy.reviews.models.Restaurant;
import com.launchacademy.reviews.repositories.CategoryRepository;
import com.launchacademy.reviews.repositories.RestaurantRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class B_RestaurantSeeder implements CommandLineRunner {
  private RestaurantRepository restaurantRepository;
  private CategoryRepository categoryRepository;

  @Autowired
  public B_RestaurantSeeder(
          RestaurantRepository restaurantRepository,
          CategoryRepository categoryRepository) {
    this.restaurantRepository = restaurantRepository;
    this.categoryRepository = categoryRepository;
  }

  @Override
  public void run(String...args) throws Exception {
    List<Restaurant> restaurants = (List<Restaurant>) restaurantRepository.findAll();
    List<Category> categories = (List<Category>) categoryRepository.findAll();

    if (restaurants.size() == 0) {
      Restaurant restaurant1 = new Restaurant();
      restaurant1.setCategory(categories.get(0));
      restaurant1.setName("Tamarind Tree");
      restaurant1.setImageUrl("https://bigseventravel.com/wp-content/uploads/2020/07/Screenshot-2020-07-29-at-12.31.51.png");
      restaurant1.setAddress("1036 S Jackson St, Seattle, WA 98104");
      restaurant1.setPhoneNumber("2068601404");
      restaurant1.setHealthDeptRating(3);
      restaurant1.setDescription("Popular spot for inventive Vietnamese cuisine & cocktails in an elegant, soothing setting.");
      restaurantRepository.save(restaurant1);

      Restaurant restaurant2 = new Restaurant();
      restaurant2.setCategory(categories.get(0));
      restaurant2.setName("Phở Mimôsa");
      restaurant2.setImageUrl("https://media.istockphoto.com/photos/tobowl-hoi-an-picture-id178886151?k=6&m=178886151&s=612x612&w=0&h=H_nR5-nZtnW3vvTnANXS_12lZ5ET-2_Ka1JO_Bzk7fI=");
      restaurant2.setAddress("817 Ave D, Snohomish, WA 98290");
      restaurant2.setPhoneNumber("3605682910");
      restaurant2.setHealthDeptRating(3);
      restaurant2.setDescription("Low-key dining space featuring classic Vietnamese noodle soups & other familiar entrees.");
      restaurantRepository.save(restaurant2);

      Restaurant restaurant3 = new Restaurant();
      restaurant3.setCategory(categories.get(0));
      restaurant3.setName("Saigon Pho And Grill");
      restaurant3.setImageUrl("https://www.cooking-therapy.com/wp-content/uploads/2020/06/Vietnamese-Turmeric-Fish-scaled.jpg");
      restaurant3.setAddress("19959 US-2, Monroe, WA 98272");
      restaurant3.setPhoneNumber("3608633987");
      restaurant3.setHealthDeptRating(3);
      restaurant3.setDescription("Cozy Vietnamese spot offering an extensive menu of favorites like pho, banh mi & vegetarian options.");
      restaurantRepository.save(restaurant3);

      Restaurant restaurant4 = new Restaurant();
      restaurant4.setCategory(categories.get(1));
      restaurant4.setName("Ohana");
      restaurant4.setImageUrl("https://images.media-allrecipes.com/userphotos/4505366.jpg");
      restaurant4.setAddress("2207 1st Ave, Seattle, WA 98121");
      restaurant4.setPhoneNumber("2069569329");
      restaurant4.setHealthDeptRating(3);
      restaurant4.setDescription("Hawaiian eats, sushi & tropical cocktails in an upbeat setting with bamboo booths & a tiki bar.");
      restaurantRepository.save(restaurant4);

      Restaurant restaurant5 = new Restaurant();
      restaurant5.setCategory(categories.get(1));
      restaurant5.setName("Kona Kitchen");
      restaurant5.setImageUrl("https://tinroofmaui.weebly.com/uploads/1/2/9/5/129532932/s394344976169072280_p14_i1_w1920.jpeg");
      restaurant5.setAddress("3805 196th St SW, Lynnwood, WA 98036");
      restaurant5.setPhoneNumber("4255785662");
      restaurant5.setHealthDeptRating(3);
      restaurant5.setDescription("Comfortable, family-friendly establishment offering many Hawaiian favorites, plus lunch specials.");
      restaurantRepository.save(restaurant5);

      Restaurant restaurant6 = new Restaurant();
      restaurant6.setCategory(categories.get(1));
      restaurant6.setName("Hani Hani");
      restaurant6.setImageUrl("https://www.kitchensanctuary.com/wp-content/uploads/2015/07/Hawaiian-Sticky-Chicken-wth-Pineapple-square.jpg");
      restaurant6.setAddress("9999 Harbour Pl Ste. 105, Mukilteo, WA 98275");
      restaurant6.setPhoneNumber("4255120188");
      restaurant6.setHealthDeptRating(3);
      restaurant6.setDescription("Simplistic Hawaiian food outlet in a small retail park serving poke & ramen bowls & grilled meats.");
      restaurantRepository.save(restaurant6);

      Restaurant restaurant7 = new Restaurant();
      restaurant7.setCategory(categories.get(2));
      restaurant7.setName("El Camino");
      restaurant7.setImageUrl("https://www.simplyscratch.com/wp-content/uploads/2020/02/Easy-Beef-Street-Tacos-l-SimplyScratch.com-beef-steak-streettaco-taco-tacotuesday-corntaco-11-720x540.jpg");
      restaurant7.setAddress("607 N 35th St, Seattle, WA 98103");
      restaurant7.setPhoneNumber("2066327303");
      restaurant7.setHealthDeptRating(3);
      restaurant7.setDescription("Colorful & lively eatery with creative takes on Mexican regional dishes, washed down by margaritas.");
      restaurantRepository.save(restaurant7);

      Restaurant restaurant8 = new Restaurant();
      restaurant8.setCategory(categories.get(2));
      restaurant8.setName("Moctezuma's");
      restaurant8.setImageUrl("https://www.simplyrecipes.com/thmb/Ue8j7KE3xwvC9w49BEV3Y0UbaL4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__10__posole-rojo-vertical-b2-1600-b92c7f3ea7394957b10b0a1d4862f00f.jpg");
      restaurant8.setAddress("4102 S 56th St, Tacoma, WA 98409");
      restaurant8.setPhoneNumber("2534745593");
      restaurant8.setHealthDeptRating(3);
      restaurant8.setDescription("Longtime source of home-style Mexican staples & margaritas in a casual, family-friendly space.");
      restaurantRepository.save(restaurant8);

      Restaurant restaurant9 = new Restaurant();
      restaurant9.setCategory(categories.get(2));
      restaurant9.setName("La Cocina Oaxaqueña");
      restaurant9.setImageUrl("https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/151672.jpg");
      restaurant9.setAddress("1216 Pine St, Seattle, WA 98101");
      restaurant9.setPhoneNumber("2066238226");
      restaurant9.setHealthDeptRating(3);
      restaurant9.setDescription("Mexican eats & specialty tequila cocktails in an industrial-cool cantina with outdoor seating");
      restaurantRepository.save(restaurant9);


    }
  }
}
