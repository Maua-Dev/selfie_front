export class AutomaticReview {
    constructor(
      public automaticallyRejected: boolean,
      public rejectionReasons: string[],
      public labels: any[]
    ) {}
  
    static RejectedLabelslist: string[] = [
      'Hat',
      'Cap',
      'Glasses',
      'Scarf',
      'Electronics',
      'Sunglasses',
      'Finger',
      'Pool',
      'Nature',
      'Vegetation',
      'Restaurand',
      'Furniture',
      'Library',
      'Airplane',
      'Thophy',
      'Bag',
      'Shorts',
      'Building',
      'Architecture',
      'Plant',
      'Outdoors',
      'Urban',
      'City',
      'Animal',
      'Pet',
      'Food',
      'Phone',
    ];
  }