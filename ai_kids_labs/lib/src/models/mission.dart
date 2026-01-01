class Mission {
  final int id;
  final String title;
  final String description;
  final MissionImage image;
  final String duration;
  final String difficulty;

  const Mission({
    required this.id,
    required this.title,
    required this.description,
    required this.image,
    required this.duration,
    required this.difficulty,
  });
}

class MissionImage {
  final String webp;
  final String jpg;

  const MissionImage({
    required this.webp,
    required this.jpg,
  });
}
