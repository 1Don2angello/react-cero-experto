import 'package:http/http.dart' as http;

class ApiService {
  final String baseUrl;

  ApiService(this.baseUrl);

  Future<void> testRequest() async {
    final response = await http.get(Uri.parse('$baseUrl/test'));
    if (response.statusCode == 200) {
      print('Success: ${response.body}');
    } else {
      print('Failed to load data');
    }
  }
}
