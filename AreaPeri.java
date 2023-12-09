import java.util.Scanner;

public class AreaPeri {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length = ");
        int l = sc.nextInt();
        System.out.print("Enter breadth = ");
        int b = sc.nextInt();

        int area = l * b;
        int peri = 2 * (l + b);

        System.out.println(area);
        System.out.println(peri);
    }
}
