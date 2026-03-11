import java.util.*;

class Product {
    int id;
    String name;
    String category;
    int price;
    int mrp;
    double rating;
    int reviews;
    int discount;
    String badge;

    Product(int id, String name, String category, int price, int mrp,
            double rating, int reviews, int discount, String badge) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.mrp = mrp;
        this.rating = rating;
        this.reviews = reviews;
        this.discount = discount;
        this.badge = badge;
    }

    void display() {
        System.out.println("\nID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Category: " + category);
        System.out.println("Price: ₹" + price);
        System.out.println("MRP: ₹" + mrp);
        System.out.println("Rating: " + rating);
        System.out.println("Reviews: " + reviews);
        System.out.println("Discount: " + discount + "%");
        System.out.println("Badge: " + badge);
    }
}

class User {
    String name;
    String email;
    String password;

    User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class Order {
    String orderId;
    String userEmail;
    List<Product> items;
    int total;

    Order(String orderId, String userEmail, List<Product> items) {
        this.orderId = orderId;
        this.userEmail = userEmail;
        this.items = new ArrayList<>(items);
        this.total = 0;
        for (Product p : items) {
            this.total += p.price;
        }
    }

    void display() {
        System.out.println("\nOrder ID: " + orderId);
        System.out.println("User: " + userEmail);
        System.out.println("Items:");
        for (Product p : items) {
            System.out.println("- " + p.name + " ₹" + p.price);
        }
        System.out.println("Total: ₹" + total);
    }
}

class BrowsingNode {
    Product product;
    BrowsingNode next;

    BrowsingNode(Product product) {
        this.product = product;
    }
}

class BrowsingHistoryLinkedList {
    BrowsingNode head;

    void add(Product product) {
        BrowsingNode newNode = new BrowsingNode(product);
        if (head == null) {
            head = newNode;
            return;
        }
        BrowsingNode temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    void showHistory() {
        if (head == null) {
            System.out.println("Browsing history is empty.");
            return;
        }
        System.out.println("\nBrowsing History:");
        BrowsingNode temp = head;
        while (temp != null) {
            System.out.println("- " + temp.product.name);
            temp = temp.next;
        }
    }
}

class DCPACSystem {
    ArrayList<Product> products;
    ArrayList<Product> cart;
    ArrayList<Order> orders;
    HashMap<Integer, Product> productMap;
    HashMap<String, User> users;
    Stack<String> cartActions;
    Queue<Order> orderQueue;
    BrowsingHistoryLinkedList history;
    Scanner sc;
    User currentUser;

    DCPACSystem() {
        products = new ArrayList<>();
        cart = new ArrayList<>();
        orders = new ArrayList<>();
        productMap = new HashMap<>();
        users = new HashMap<>();
        cartActions = new Stack<>();
        orderQueue = new LinkedList<>();
        history = new BrowsingHistoryLinkedList();
        sc = new Scanner(System.in);

        seedUsers();
        loadProducts();
    }

    void seedUsers() {
        users.put("demo@dcpac.com", new User("Demo User", "demo@dcpac.com", "demo123"));
        users.put("admin@dcpac.com", new User("Admin", "admin@dcpac.com", "admin123"));
    }

    void loadProducts() {

    addProduct(new Product(1,"Apple iPhone 15 Pro Max 256GB Titanium","Electronics",134900,159900,4.8,14532,16,"NEW"));
    addProduct(new Product(2,"Samsung Galaxy S24 Ultra 512GB Titanium","Electronics",129999,149999,4.7,9823,13,"HOT"));
    addProduct(new Product(3,"MacBook Air M3 13-inch 16GB 512GB","Electronics",114900,134900,4.9,5634,15,"APPLE"));
    addProduct(new Product(4,"Sony WH-1000XM5 Noise Cancelling Headphones","Electronics",24990,34990,4.8,19867,29,"BEST"));
    addProduct(new Product(5,"Nike Air Max 270 React Men's Shoes","Fashion",12995,16995,4.6,34521,24,"NIKE"));
    addProduct(new Product(6,"Levi's 511 Slim Fit Stretch Jeans","Fashion",2799,4299,4.5,56789,35,"LEVIS"));
    addProduct(new Product(7,"Dyson V15 Detect Absolute Cordless Vacuum","Home",52900,62900,4.7,3456,16,"DYSON"));
    addProduct(new Product(8,"Instant Pot Duo 7-in-1 Pressure Cooker 6L","Home",8999,12999,4.8,67890,31,"COOK"));
    addProduct(new Product(9,"Yonex Astrox 99 Pro Carbon Badminton Racket","Sports",15999,19999,4.7,4321,20,"SPORT"));
    addProduct(new Product(10,"Atomic Habits by James Clear","Books",499,799,4.9,234567,38,"BEST"));

    addProduct(new Product(11,"Apple Watch Series 9 GPS 45mm","Electronics",45900,51900,4.8,7832,12,"WATCH"));
    addProduct(new Product(12,"Dell XPS 15 OLED Laptop","Electronics",189999,209999,4.7,4123,9,"DELL"));
    addProduct(new Product(13,"HP Pavilion Gaming Laptop RTX 4060","Electronics",99999,119999,4.6,7231,16,"HP"));
    addProduct(new Product(14,"Adidas Ultraboost Running Shoes","Fashion",14999,18999,4.7,23112,21,"ADIDAS"));
    addProduct(new Product(15,"Puma RS-X Reinvention Sneakers","Fashion",9999,13999,4.5,17893,28,"PUMA"));

    addProduct(new Product(16,"LG 55 inch OLED Smart TV","Electronics",149999,179999,4.8,8654,17,"LG"));
    addProduct(new Product(17,"Samsung 65 inch Neo QLED TV","Electronics",199999,239999,4.7,4321,16,"QLED"));
    addProduct(new Product(18,"Canon EOS R7 Mirrorless Camera","Electronics",139999,159999,4.8,2987,13,"CANON"));
    addProduct(new Product(19,"GoPro Hero 12 Action Camera","Electronics",45999,51999,4.6,6321,12,"GOPRO"));
    addProduct(new Product(20,"JBL Charge 5 Portable Bluetooth Speaker","Electronics",11999,15999,4.7,21000,25,"JBL"));

    addProduct(new Product(21,"Apple AirPods Pro 2nd Gen","Electronics",24999,27999,4.8,54321,11,"APPLE"));
    addProduct(new Product(22,"Samsung Galaxy Buds2 Pro","Electronics",17999,19999,4.6,15000,10,"BUDS"));
    addProduct(new Product(23,"Sony Alpha A7 IV Camera","Electronics",242999,259999,4.9,3210,6,"SONY"));
    addProduct(new Product(24,"Kindle Paperwhite 11th Gen","Books",13999,15999,4.7,65000,12,"KINDLE"));
    addProduct(new Product(25,"The Psychology of Money Book","Books",399,699,4.8,200000,43,"BOOK"));

    addProduct(new Product(26,"Home Workout Adjustable Dumbbells","Sports",7999,10999,4.6,12000,27,"FIT"));
    addProduct(new Product(27,"Yoga Mat Premium Anti Slip","Sports",1299,1999,4.5,34000,35,"YOGA"));
    addProduct(new Product(28,"Cricket Bat English Willow","Sports",5999,8999,4.6,15000,33,"CRICKET"));
    addProduct(new Product(29,"Football Adidas UEFA Champions League","Sports",2999,3999,4.7,19000,25,"BALL"));
    addProduct(new Product(30,"Treadmill Home Use Foldable","Sports",45999,59999,4.5,2100,23,"GYM"));

    addProduct(new Product(31,"Wooden Study Table","Home",8999,11999,4.4,1200,25,"HOME"));
    addProduct(new Product(32,"Office Ergonomic Chair","Home",10999,14999,4.6,2300,27,"CHAIR"));
    addProduct(new Product(33,"Memory Foam Mattress Queen Size","Home",15999,21999,4.7,5400,27,"BED"));
    addProduct(new Product(34,"LED Desk Lamp Study Light","Home",1299,1999,4.5,9000,35,"LAMP"));
    addProduct(new Product(35,"Kitchen Mixer Grinder 750W","Home",4999,6999,4.4,8000,28,"KITCHEN"));

    addProduct(new Product(36,"RayBan Aviator Sunglasses","Fashion",12999,15999,4.7,32000,19,"RAYBAN"));
    addProduct(new Product(37,"Casio G Shock Digital Watch","Fashion",7999,9999,4.8,27000,20,"CASIO"));
    addProduct(new Product(38,"Fossil Leather Wallet","Fashion",2999,3999,4.6,10000,25,"FOSSIL"));
    addProduct(new Product(39,"Zara Men's Slim Fit Shirt","Fashion",1999,2999,4.4,7000,33,"ZARA"));
    addProduct(new Product(40,"H&M Hoodie Sweatshirt","Fashion",2499,3499,4.5,6000,28,"HM"));

    addProduct(new Product(41,"Gaming Mechanical Keyboard RGB","Electronics",6999,8999,4.6,9000,22,"RGB"));
    addProduct(new Product(42,"Logitech MX Master 3S Mouse","Electronics",9999,12999,4.8,15000,23,"LOGI"));
    addProduct(new Product(43,"PlayStation 5 Console","Electronics",54999,59999,4.9,50000,8,"PS5"));
    addProduct(new Product(44,"Xbox Series X Console","Electronics",49999,54999,4.8,42000,9,"XBOX"));
    addProduct(new Product(45,"Nintendo Switch OLED Console","Electronics",34999,37999,4.7,35000,7,"NINTENDO"));

}

    void addProduct(Product p) {
        products.add(p);
        productMap.put(p.id, p);
    }

    boolean login() {
        System.out.print("Enter email: ");
        String email = sc.nextLine();
        System.out.print("Enter password: ");
        String password = sc.nextLine();

        User u = users.get(email);
        if (u != null && u.password.equals(password)) {
            currentUser = u;
            System.out.println("Login successful. Welcome, " + u.name + "!");
            return true;
        }

        System.out.println("Invalid credentials.");
        return false;
    }

    void showAllProducts() {
        for (Product p : products) {
            p.display();
        }
    }

    void searchProductById() {
        System.out.print("Enter product ID: ");
        int id = Integer.parseInt(sc.nextLine());

        Product p = productMap.get(id);
        if (p == null) {
            System.out.println("Product not found.");
        } else {
            p.display();
            history.add(p);
        }
    }

    void linearSearchByName() {
        System.out.print("Enter product name keyword: ");
        String key = sc.nextLine().toLowerCase();

        boolean found = false;
        for (Product p : products) {
            if (p.name.toLowerCase().contains(key)) {
                p.display();
                history.add(p);
                found = true;
            }
        }

        if (!found) {
            System.out.println("No matching products found.");
        }
    }

    void filterByCategory() {
        System.out.print("Enter category: ");
        String cat = sc.nextLine();

        boolean found = false;
        for (Product p : products) {
            if (p.category.equalsIgnoreCase(cat)) {
                p.display();
                found = true;
            }
        }

        if (!found) {
            System.out.println("No products found in this category.");
        }
    }

    void sortProducts() {
        ArrayList<Product> sorted = new ArrayList<>(products);

        System.out.println("1. Sort by Price Low to High");
        System.out.println("2. Sort by Price High to Low");
        System.out.println("3. Sort by Rating");
        System.out.println("4. Sort by Discount");
        System.out.print("Choose option: ");
        String ch = sc.nextLine();

        switch (ch) {
            case "1":
                sorted.sort(Comparator.comparingInt(p -> p.price));
                break;
            case "2":
                sorted.sort((a, b) -> Integer.compare(b.price, a.price));
                break;
            case "3":
                sorted.sort((a, b) -> Double.compare(b.rating, a.rating));
                break;
            case "4":
                sorted.sort((a, b) -> Integer.compare(b.discount, a.discount));
                break;
            default:
                System.out.println("Invalid choice.");
                return;
        }

        for (Product p : sorted) {
            p.display();
        }
    }

    void addToCart() {
        System.out.print("Enter product ID to add to cart: ");
        int id = Integer.parseInt(sc.nextLine());

        Product p = productMap.get(id);
        if (p == null) {
            System.out.println("Product not found.");
            return;
        }

        cart.add(p);
        cartActions.push("Added to cart: " + p.name);
        System.out.println("Added to cart.");
    }

    void showCart() {
        if (cart.isEmpty()) {
            System.out.println("Cart is empty.");
            return;
        }

        int total = 0;
        System.out.println("\n===== CART =====");
        for (Product p : cart) {
            System.out.println("- " + p.name + " ₹" + p.price);
            total += p.price;
        }
        System.out.println("Total: ₹" + total);
    }

    void undoCartAction() {
        if (cartActions.isEmpty()) {
            System.out.println("No recent cart actions.");
        } else {
            System.out.println("Undo: " + cartActions.pop());
        }
    }

    void placeOrder() {
        if (currentUser == null) {
            System.out.println("Please login first.");
            return;
        }

        if (cart.isEmpty()) {
            System.out.println("Cart is empty.");
            return;
        }

        String orderId = "ORD" + (orders.size() + 1);
        Order order = new Order(orderId, currentUser.email, cart);
        orders.add(order);
        orderQueue.offer(order);

        cart.clear();

        System.out.println("Order placed successfully.");
        order.display();
    }

    void processNextOrder() {
        Order next = orderQueue.poll();
        if (next == null) {
            System.out.println("No pending orders in queue.");
        } else {
            System.out.println("Processing order:");
            next.display();
        }
    }

    void showOrders() {
        if (orders.isEmpty()) {
            System.out.println("No orders placed.");
            return;
        }

        for (Order o : orders) {
            o.display();
        }
    }

    void showMenu() {
        while (true) {
            System.out.println("\n===== DCPAC JAVA DSA MENU =====");
            System.out.println("1. Login");
            System.out.println("2. Show All Products");
            System.out.println("3. Search Product by ID (HashMap)");
            System.out.println("4. Search Product by Name (Linear Search)");
            System.out.println("5. Filter by Category");
            System.out.println("6. Sort Products");
            System.out.println("7. Add to Cart");
            System.out.println("8. Show Cart");
            System.out.println("9. Undo Cart Action (Stack)");
            System.out.println("10. Place Order");
            System.out.println("11. Process Next Order (Queue)");
            System.out.println("12. Show Orders");
            System.out.println("13. Show Browsing History (LinkedList)");
            System.out.println("14. Exit");
            System.out.print("Enter choice: ");

            String choice = sc.nextLine();

            switch (choice) {
                case "1":
                    login();
                    break;
                case "2":
                    showAllProducts();
                    break;
                case "3":
                    searchProductById();
                    break;
                case "4":
                    linearSearchByName();
                    break;
                case "5":
                    filterByCategory();
                    break;
                case "6":
                    sortProducts();
                    break;
                case "7":
                    addToCart();
                    break;
                case "8":
                    showCart();
                    break;
                case "9":
                    undoCartAction();
                    break;
                case "10":
                    placeOrder();
                    break;
                case "11":
                    processNextOrder();
                    break;
                case "12":
                    showOrders();
                    break;
                case "13":
                    history.showHistory();
                    break;
                case "14":
                    System.out.println("Exiting DCPAC...");
                    return;
                default:
                    System.out.println("Invalid choice.");
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        DCPACSystem system = new DCPACSystem();
        system.showMenu();
    }
}