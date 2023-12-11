import java.util.Scanner;

public class MaxOfThree {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter x = ");
        int x = sc.nextInt();
        System.out.print("Enter y = ");
        int y = sc.nextInt();
        System.out.print("Enter z = ");
        int z = sc.nextInt();

        if(x >= y){
            if(x>=z){
                System.out.print(x);
            }
            else{
                System.out.print(z);
            }
        } else{
            if(y>=z){
                System.out.print(y);
            }
            else{
                System.out.print(z);
            }
        }
    }
}
