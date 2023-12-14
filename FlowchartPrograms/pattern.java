import java.util.Scanner;

public class pattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i, j;
        System.out.print("Enter n = ");
        int n = sc.nextInt();
        for (i = 1; i <= n; i++) {
            
            for (j=i; j <= (2*i)-1; j++) {
                System.out.print(j + " ");
            }
            for (j = j-2; j >= i; j--) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
