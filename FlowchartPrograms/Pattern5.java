import java.util.Scanner;

public class Pattern5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int i = 1;
        int j;

        while (i <= n) {
            j = i;

            if (j <= 2 * i - 1) {
                System.out.print((j % 10) + " ");
                j = j + 1;
            }

            if (j >= i) {
                System.out.print((j % 10) + " ");
            }

            i = i + 1;
            j = j - 1;

            System.out.println();
        }
    }
}