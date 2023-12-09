import java.util.Scanner;

public class MaxFourVar {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int x,y,z,w;
        x = sc.nextInt();
        y = sc.nextInt();
        z = sc.nextInt();
        w = sc.nextInt();

        if(x>=y){
            if(x>=z){
                if(x>=w){
                    System.out.println(x);
                }
                else {
                    System.out.println(w);
                }
            } else if (z>=w) {
                System.out.println(z);
            }
            else{
                System.out.println(w);
            }
        } else if (y>=z) {
            if (y>=w) {

            }

        }
    }
}
