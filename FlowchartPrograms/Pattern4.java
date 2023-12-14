import java.util.Scanner;

public class Pattern4 {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i = 1, j = 1, k, x;
        System.out.print("Enter n = ");
        int n = sc.nextInt();
        sc.close();

        for (x = 1; x <= n; x++) {
            System.out.print(i + " ");
            k = i + j;
            i = j;
            j = k;

            System.out.print((2 * x - 1) + " ");
        }
    }
}
