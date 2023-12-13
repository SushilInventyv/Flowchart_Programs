import java.util.Scanner;

public class PatternOddFact {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n = ");
        int n = sc.nextInt();
        int fact = 1, i;

        for(i = 3;i <= (n*n/2);i+=2){
            System.out.print(fact + " ");
            fact = fact*i*(i-1);
        }
    }
}
