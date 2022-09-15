public with sharing class CarPrice {
    public CarPrice() {
        Map<String, Integer> m1 = new Map<String, Integer>();
        m1.put('Tata', 70000);
        m1.put('Mahindra XUV',60000 );
        m1.put('Swift', 50000);
        m1.put('Vagan-R', 40000);
        Map<String, Integer> m2 = new Map<String, Integer>(m1);
        // The map elements of m2 are copied from m1
        System.debug(m2);
    }
}