import java.util.Scanner;

public class PatternPovNeg {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n = ");
        int n = sc.nextInt();
        int j = 1,i;

        for(i = 1;i<=n;i++){
            System.out.print((i*j) + " ");
            j = j * (-1);
        }
    }
}
