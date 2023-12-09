import java.util.Scanner;

public class RsPRs {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int paisa,rs;
        System.out.print("Enter input = ");
        int input = sc.nextInt();
        System.out.print("Enter c = ");
        char c = (char) sc.next().charAt(0);

        if(c == 'r' || c == 'R'){
            paisa = input * 100;
            System.out.println(paisa);
        }
        else {
            if (c == 'p' || c == 'P'){
                rs = input / 100;
                System.out.println(rs);
            }
        }
    }
}
