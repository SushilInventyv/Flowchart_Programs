public class pattern3 {
    public static void main(String[] args){
        int i,j,n=4;

        for(i=1;i<=n;i++){
            for(j=1;j<=i;j++){
                System.out.print(j);
            }
            for(j=i-1;j>=1;j--){
                System.out.print(j);
            }
            System.out.println();
        }
    }
}
