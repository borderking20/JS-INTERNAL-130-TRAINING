class Student{
    int rollNo,contact;
    string name, course;
    public Student(int rollNo, int contact, string name, string course){
        this.name = name;
        this.course = course;
        this.rollNo = rollNo;
        this.contact = contact;
    }
    public void Display(){
        console.WriteLine(name, course, rollNo, contact);
    }
}
class Mymain{
    public static void Main()
    {
        
    }
}